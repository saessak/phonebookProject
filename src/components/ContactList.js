import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm"
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contact = useSelector((state) => state.phonebook.contact);
  const keyword = useSelector((state) => state.phonebook.keyword);

  let [filteredList, setFilteredList] = useState([]);
  console.log("contact?",contact); //왜 console은 3번 불리지..? 

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [{keyword}]);
  return (
    <div>
      <SearchForm />
      <div className="contact-list">
        Num:{filteredList.length}
        {filteredList.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;