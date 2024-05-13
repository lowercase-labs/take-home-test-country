


export const FetchALlCountry = async() =>  {

    console.log("jyyy");
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
    return { type: 'FETCH_COUNTRY', payload: data };
  };