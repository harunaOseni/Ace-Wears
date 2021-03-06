import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  nextStep,
  previousStep,
  shippingData,
  captureCheckout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) {
      if (!stripe) console.log("No stripe!");
      if (!elements) console.log("No elements!");
      return;
    };

    const cardElement = elements.getElement(CardElement);

    const lineItems = checkoutToken.live.line_items.reduce((obj, lineItem) => {
      obj[lineItem.id] = {
        quantity: lineItem.quantity,
      }
      if (lineItem.selected_options.length) {
        obj[lineItem.id].selected_options = {
          [lineItem.selected_options[0].group_id]: lineItem.selected_options[0].option_id
        }
      }
      return obj
    }, {}); 

    // console.log(lineItems);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("we have an error", error);
    } else {
      // console.log("Here is the shipping data",shippingData);
      const orderData = {
        line_items: lineItems,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: `${shippingData.firstName} ${shippingData.lastName} `,
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        }, 
        fulfillment: { shipping_method: shippingData.shippingOption }, 

        billing: {
          name: 'Haruna Oseni',
          street: '234 Fake St',
          town_city: 'San Francisco',
          county_state: 'US-CA',
          postal_zip_code: '94103',
          country: 'US'
        }
        ,
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      captureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  // console.log(stripePromise); 
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={previousStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;