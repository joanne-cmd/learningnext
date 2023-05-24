export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninjas => {
      return {
        params: { id: ninjas.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  }
  
  const Details = ({ ninjas }) => {
    return (
      <div>
        <h1>{ ninjas.name }</h1>
        <p>{ ninjas.email }</p>
        <p>{ ninjas.website }</p>
        <p>{ ninjas.address.city }</p>
      </div>
    );
  }
  
  export default Details;