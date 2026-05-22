class APIFeatures {
  constructor(query, queryString) {
    this.query = query;

    this.queryString = queryString;
  }

  // Search by product name
  search() {
    const keyword = this.queryString.search
      ? {
          name: {
            $regex: this.queryString.search,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find(keyword);

    return this;
  }

  // Filter by category and price
  filter() {
    const queryCopy = { ...this.queryString };

    // Remove special fields
    const removeFields = [
      "search",
      "sort",
      "page",
      "limit",
    ];

    removeFields.forEach(
      (field) => delete queryCopy[field]
    );

    // Advanced filtering
    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (key) => `$${key}`
    );

    this.query = this.query.find(
      JSON.parse(queryStr)
    );

    return this;
  }

  // Sort products
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort
        .split(",")
        .join(" ");

      this.query = this.query.sort(sortBy);

    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  // Pagination
  paginate(resultPerPage) {

    const currentPage =
      Number(this.queryString.page) || 1;

    const skip =
      resultPerPage * (currentPage - 1);

    this.query = this.query
      .limit(resultPerPage)
      .skip(skip);

    return this;
  }
}

module.exports = APIFeatures;