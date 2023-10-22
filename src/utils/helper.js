export function filterData(searchText, restaurants){
  const filterData=  restaurants.filter((res)=>
  res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
};