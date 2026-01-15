import React, { useEffect, useState } from 'react';

const useData = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch("/booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))

    },[])
    return {books}
};

export default useData;