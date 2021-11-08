import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProductListAction } from "./../../store/action";
import ListItem from "./../../components/common/listItem";

interface HomeProps {
  getProductListAction: any;
  productList: Array<any>;
}

function Home(props: HomeProps) {
  //props
  const { getProductListAction, productList } = props;

  useEffect(() => {
    getProductListAction();
  }, []);

  return (
    <div className="gridWith4Column">
      {productList.map((obj) => (
        <ListItem {...obj} />
      ))}
    </div>
  );
}

interface StateInterface {
  productList: Array<any>;
}
const mapStateToProps = (state: StateInterface) => ({
  productList: state.productList,
});

const mapDispatchToProps = {
  getProductListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
