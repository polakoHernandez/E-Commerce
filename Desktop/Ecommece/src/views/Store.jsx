import React from "react";
import * as utils from "../utils/Store/utils";
import { useSelector } from "react-redux";

const Store = () => {
  const [data, setData] = utils.useState([]);
  const [dataItem, setDataItem] = utils.useState({});
  const [openModal, setOpenModal] = utils.useState(false);
  const openIItemsModal = useSelector((state) => state.openItems);

  const passDataItem = (data) => {
    setDataItem(data);
    setOpenModal(true);
  };

  utils.useEffect(() => {
    utils.getProducts(data).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div style={{ ...styles.generalContainer }}>
      {data.length === 0 ? (
        <utils.CircularProgress
          thickness={5}
          sx={{ color: "pink" }}
        ></utils.CircularProgress>
      ) : (
        <utils.Grid container sx={{ ...styles.gridContainer }} spacing={2}>
          {data.map((item) => (
            <utils.Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{ ...styles.gridItem }}
              key={item.id}
            >
              <utils.CardItem
                item={item}
                onClick={() => passDataItem(item)}
                price={item.price}
                name={item.title}
                image={item.image}
              ></utils.CardItem>
            </utils.Grid>
          ))}
        </utils.Grid>
      )}
      <utils.CardShowItem
        data={dataItem}
        open={openModal}
        close={() => setOpenModal(false)}
      ></utils.CardShowItem>
      <utils.ItemsModal open={openIItemsModal}></utils.ItemsModal>
    </div>
  );
};

const styles = {
  generalContainer: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "10px",
    position: "relative",
  },

  gridContainer: {
    width: "98%",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Store;
