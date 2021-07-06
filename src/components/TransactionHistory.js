import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TransactionHistory = ({ items }) => {
  const useStyles = makeStyles({
    table: {
      "margin-left": "auto",
      "margin-right": "auto",
      minWidth: 150,
      maxWidth: 450,
      "border-top": "solid 1px #000",
      "border-bottom": "solid 1px #000",
    },
    cell: {
      "border-right": "solid 1px #000",
      "border-left": "solid 1px #000",
    },
  });
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell className={classes.cell}>TYPE</TableCell>
          <TableCell className={classes.cell}>AMOUNT</TableCell>
          <TableCell className={classes.cell}>CURRENCY</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className={classes.cell}>{item.type}</TableCell>
            <TableCell className={classes.cell}>{item.amount}</TableCell>
            <TableCell className={classes.cell}>{item.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
