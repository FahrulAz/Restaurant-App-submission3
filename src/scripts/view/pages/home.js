import DataSource from '../../data/data-source';
import '../../component/hero';
import SliderImageHero from '../../utils/slider-hero';
import { createRestoItemTemplate, createLoading } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <div class="load"></div>
    <div class="containerHero">
      <hero-main></hero-main>
        <h1 tabindex="0" class="judul-utama">List Seluruh Restaurant Di Seluruh Indonesia</h1>
        
        <list-resto tabindex="0" id="explore-restaurant">
        </list-resto>
    </div>
`;
  },

  async afterRender() {
    const loading = document.querySelector('.load');
    const container = document.querySelector('.containerHero');
    const listResto = document.querySelector('#explore-restaurant');

    container.style.display = 'none';
    loading.innerHTML = createLoading();

    try {
      // fungsi menampilkan card
      const restos = await DataSource.getDataResto();
      restos.forEach((resto) => {
        listResto.innerHTML += createRestoItemTemplate(resto);
      });

      loading.style.display = 'none';
      container.style.display = 'block';
      const sliderImageHero = new SliderImageHero();
      sliderImageHero.startSlideshow();
    } catch (error) {
      listResto.innerHTML = `${error.message}`;
      container.style.display = 'block';
      loading.style.display = 'none';
    }
  },
};

export default Home;
