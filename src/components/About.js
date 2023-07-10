import React from "react";
import food_img from "../../imgs/food2.jpg";

const About = (props) => {
  return (
    <div className="bg-red-300 m-0 flex justify-center">
      <div className="w-3/5 h-auto p-10 bg-white my-5">
        <div className="sec-1 flex">
          <div className="">
            <div className="heading text-3xl font-semibold font-serif">About Us</div>
            <p className="my-3">
              Welcome to Foodyville! We are passionate about connecting food
              lovers with their favorite restaurants and providing a convenient
              platform for online food ordering. Our mission is to deliver
              delicious meals right to your doorstep while ensuring a seamless
              and enjoyable user experience.
            </p>
          </div>
          <img className="rounded shadow-md w-2/5 m-3" src={food_img}></img>
        </div>
        <div className="section-2 my-10">
          <div>
            <h2 className="heading text-3xl text-center font-semibold font-serif">Our Story</h2>
            <p className="m-5">
              Foodyville was founded with the vision of revolutionizing the way
              people order food online. We recognized the need for a
              user-friendly platform that allows customers to explore a wide
              variety of cuisines, browse menus, and place orders effortlessly
              from the comfort of their homes or offices. Our dedicated team of
              food enthusiasts and technology experts came together to create a
              platform that simplifies the online food ordering process. We
              strive to provide an exceptional service that not only satisfies
              your hunger but also saves you time and effort.
            </p>
          </div>
        </div>
        <div className="m-5 bg-red-900 text-white text-center">Created by <a className="font-medium underline" href="https://github.com/mikasa-404">Priya Jha</a></div>

      </div>
    </div>
  );
};

export default About;
