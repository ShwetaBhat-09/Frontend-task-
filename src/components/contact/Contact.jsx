import React, { useState } from "react";
import { useForm } from "react-hook-form";

import doctors from "../data/data";

const Contact = () => {
  const { handleSubmit, register, watch } = useForm();
  var [isCityUrl, setIsCityUrl] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    alert("Success");
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    // console.log("New City:", newCity);

    setIsCityUrl(newCity);

    // Update the URL with the new city using the pushState method
    window.history.pushState(
      { isCityUrl: newCity },
      "",
      `?city=${encodeURIComponent(newCity)}`
    );

    // Doctors filtration
    const filteredDocs = doctors.filter((doc) => doc.city === newCity);
    console.log("Filtered Doctors:", filteredDocs);
    setFilteredDoctors(filteredDocs);
  };

  const handleOnClick = () => {
    alert("Success Your details are forwarded!");
  };

  const validateAge = (value) => {
    const age = parseInt(value, 10);
    if (age < 40 && watch("previousExperience") === "") {
      console.error(
        "If age is less than 40 years, please provide previous experience with physiotherapy."
      );
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-500">
                  Our friendly team would love to hear from you.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-4"
                >
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-gray-400 focus:ring-offset-gray-900"
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        {...register("name")}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-offset-gray-900"
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        {...register("phoneNumber")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full gap-y-4 md:gap-x-4">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="age"
                      >
                        Age
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-offset-gray-900"
                        type="text"
                        id="age"
                        placeholder="Enter Age"
                        {...register("age")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-offset-gray-900"
                        type="text"
                        id="company"
                        placeholder="Enter Company"
                        {...register("company")}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="complaints"
                      >
                        Complaints
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-offset-gray-900"
                        type="text"
                        id="complaints"
                        placeholder="Enter Complaints"
                        {...register("complaints")}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                      htmlFor="city"
                    >
                      City
                    </label>
                    <select
                      {...register("selectedCity")}
                      onChange={handleCityChange}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                    >
                      <option value="" className="bg-slate-400">
                        Select City
                      </option>
                      <option value="Ludhiana" className="bg-slate-400">
                        Ludhiana
                      </option>
                      <option value="Jalandher" className="bg-slate-400">
                        Jalandher
                      </option>
                      <option value="Phagwara" className="bg-slate-400">
                        Phagwara
                      </option>
                      <option value="Amritsar" className="bg-slate-400">
                        Amritsar
                      </option>
                      <option value="Ferozpur" className="bg-slate-400">
                        Ferozpur
                      </option>
                    </select>

                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                      htmlFor="doctors"
                    >
                      Doctors
                    </label>

                    <select
                      {...register("selectedDoctor")}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-gray-400  focus:ring-offset-1"
                    >
                      <option value="" className="bg-slate-400">
                        Select Doctor
                      </option>
                      {filteredDoctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} - {doc.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                  {watch("age") && parseInt(watch("age"), 10) > 40 ? (
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        cols={3}
                        {...register("previousExperience")}
                      />
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={handleOnClick}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
