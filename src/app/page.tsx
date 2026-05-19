import Image from "next/image";
import styles from './page.module.css';
import corousel1 from "../app/assets/Corousel3.jpg";
import corousel2 from "../app/assets/Corousel2.png";
import corousel3 from "../app/assets/Corousel3.png";
import Category from "./components/Category/Category";
import Offers from "./components/Offers/Offers";

      const categories =[
    {id: 1,url:"https://a.nooncdn.com/mpcms/EN0001/assets/2519c681-fb81-49dd-bb0c-3286327df77c.png?width=2400"},
    {id: 2,url:"https://a.nooncdn.com/mpcms/EN0001/assets/cad387cb-5ec2-440a-b605-b2bbece576b8.png?width=2400"},
    {id: 3,url:"https://a.nooncdn.com/mpcms/EN0001/assets/6358df0b-d863-40a5-9f01-80d901e4260a.png?width=2400"},
    {id: 4,url:"https://a.nooncdn.com/mpcms/EN0001/assets/e168b3ae-f033-44f8-8fd4-a2ef4eafb92b.png?width=2400"},
    {id: 5,url:"https://a.nooncdn.com/mpcms/EN0001/assets/c831e2b6-39fa-4f80-9598-e49e6f3e2940.png?width=2400"},
    {id: 6,url:"https://a.nooncdn.com/mpcms/EN0001/assets/57f9c480-0c3d-4d50-86bd-1afd94b7f0df.png?width=2400"},
    {id: 7,url:"https://a.nooncdn.com/mpcms/EN0001/assets/2df5f9ff-8631-4985-8a95-1474512adbcc.png?width=2400"},
    {id: 8,url:"https://a.nooncdn.com/mpcms/EN0001/assets/f7a82366-b2f0-444e-8a01-b9330659eec9.png?width=2400"},
    {id: 9,url:"https://a.nooncdn.com/mpcms/EN0001/assets/3ac1016a-1be4-465e-b947-2cfab599dc68.png?width=2400"},
    {id: 10,url:"https://a.nooncdn.com/mpcms/EN0001/assets/d01bb071-47d1-4863-bcb7-01432725dfcd.png?width=2400"},
    {id: 11,url:"https://a.nooncdn.com/mpcms/EN0001/assets/d01bb071-47d1-4863-bcb7-01432725dfcd.png?width=2400"}
  ];
      const offers =[
    {id: 1,url:"https://a.nooncdn.com/mpcms/EN0001/assets/feb0bcba-0164-412f-930a-b9823284f206.png?width=2400"},
    {id: 2,url:"https://a.nooncdn.com/mpcms/EN0001/assets/c499118a-851c-48d1-98a9-03b3dacc675d.png?width=2400"},
    {id: 3,url:"https://a.nooncdn.com/mpcms/EN0001/assets/c648c2af-a79a-4728-bb91-ec2a1a35f679.png?width=2400"},
    {id: 4,url:"https://a.nooncdn.com/mpcms/EN0001/assets/553b880f-5833-43d1-82ef-ec578cc3d68f.png?width=2400"},
    {id: 5,url:"https://a.nooncdn.com/mpcms/EN0001/assets/2797f892-6a1d-488d-813d-52e153fd3f89.png?width=2400"},
    {id: 6,url:"https://a.nooncdn.com/mpcms/EN0001/assets/92d033dd-44a8-477c-a17d-852be549201f.png?width=2400"},
    {id: 7,url:"https://a.nooncdn.com/mpcms/EN0001/assets/1cc2d385-683d-4fb9-9de5-912c00bf57ee.png?width=2400"},
    {id: 8,url:"https://a.nooncdn.com/mpcms/EN0001/assets/0c4e9c86-f54e-4256-8ddf-9dc80921f7c5.png?width=2400"},
    {id: 9,url:"https://a.nooncdn.com/mpcms/EN0001/assets/7725eb0d-cba4-45d4-8d9e-81526c148f92.png?width=2400"},
    {id: 10,url:"https://a.nooncdn.com/mpcms/EN0001/assets/751634dc-c764-489b-990b-12c8d1f1b9ec.png?width=2400"},
   ];

export default  function Home() {
  return (
    <div className='container-fluid my-3'>
           <div id="homeCorousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image className={`d-block w-100 ${styles.carouselImg}`} src={corousel3} alt="First slide" priority />
          </div>

          <div className="carousel-item">
            <Image className={`d-block w-100 ${styles.carouselImg}`} src={corousel2} alt="Second slide" priority />
          </div>

          <div className="carousel-item">
            <Image className={`d-block w-100 ${styles.carouselImg}`} src={corousel1} alt="Third slide" priority />
          </div>
        </div>

       
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCorousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button> 

        <button className="carousel-control-next" type="button" data-bs-target="#homeCorousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
        <div className="category-tab">
        <h4 className="my-2 text-center" style={{color:"#191970"}}>Categories</h4>
        <div className='d-flex flex-wrap justify-content-between align-items-center my-5'>
           <Category categories={categories}/>
         </div>
        </div>
        
          <h4 className="my-2 text-center" style={{color:"#701953"}}>Top Deals</h4>
          <div className='d-flex flex-wrap justify-content-between align-items-center my-8'>
              <Offers offers={offers}/>
          </div>
      </div>
    </div>
  );
}
