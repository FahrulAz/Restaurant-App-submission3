import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async getDataResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    if (responseJson.restaurants) {
      return Promise.resolve(responseJson.restaurants);
    }
    throw new Error('Data tidak ditemukan');
  }

  static async getDetailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async getRestaurantReview(comment) {
    const response = await fetch(API_ENDPOINT.REVIEW(comment), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    return response.json();
  }
}

export default DataSource;
