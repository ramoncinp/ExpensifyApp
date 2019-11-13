import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onEditExpense = expense => {
    this.props.editExpense(expense.id, expense);
    this.props.history.push('/');
  }

  onRemoveExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onEditExpense}
      />
      <button
        onClick={this.onRemoveExpense}
      >
        Remove
      </button>
    </div>
    );
  };
};

const mapsStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapsStateToProps, mapDispatchToProps)(EditExpensePage);
