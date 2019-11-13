import moment from "moment";

export default [
  {
    id: "1",
    amount: 500,
    description: "Gum",
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    amount: 1200,
    description: "Bread",
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    amount: 1500,
    description: "Cookies",
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
