const ConnectionApi = (props) => {
  const paramValue = props;

  const getAllProducts = () => {
    let retrieveField = {};
    try {
      axios.get(`http://localhost:3007/${paramValue}`).then((response) => {
        retrieveField = response.data;
      });
    } catch (error) {
      console.error(error);
    }
    return retrieveField;
  };
};
