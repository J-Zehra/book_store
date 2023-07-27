import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useRecoilValue } from "recoil";
import {
  addressState,
  cardNumberState,
  cityState,
  countryState,
  emailState,
  expiryDateState,
  firstNameState,
  lastNameState,
  nameState,
  postalCodeState,
  selectedCartItems,
  stateState,
} from "@/state/atom/order";

export default function Review() {
  const products = useRecoilValue(selectedCartItems);
  const firstName = useRecoilValue(firstNameState);
  const lastName = useRecoilValue(lastNameState);
  const address = useRecoilValue(addressState);
  const email = useRecoilValue(emailState);
  const city = useRecoilValue(cityState);
  const state = useRecoilValue(stateState);
  const postalCode = useRecoilValue(postalCodeState);
  const country = useRecoilValue(countryState);
  const cardName = useRecoilValue(nameState);
  const expiry = useRecoilValue(expiryDateState);

  const addresses = [address, city, state, postalCode, country];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: cardName },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: expiry },
  ];

  const countTotal = () => {
    let total: number = 0;
    products?.map((item) => {
      if (item) {
        total += item.book.price * item.quantity;
      }
    });
    return total;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.bookId} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.book.title}
              secondary={product.quantity}
            />
            <Typography variant="body2">${product.book.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${countTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{email}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
