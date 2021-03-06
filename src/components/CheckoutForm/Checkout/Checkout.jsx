import React from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const steps = ["Shipping address", "Payment details"];

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      checkoutToken: null,
      cart: this.props.cart,
      shippingData: {},
    };
    this.Form = this.Form.bind(this);
    this.Confirmation = this.Confirmation.bind(this);
    this.next = this.next.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.pushToHomePage = this.pushToHomePage.bind(this);
  }

  async componentDidMount() {
    //Generating token for order capture and a great checkout experience.
    await commerce.checkout
      .generateToken(this.state.cart.id, { type: "cart" })
      .then((token) => {
        this.setState({
          checkoutToken: token,
        });
        // console.log(this.state.checkoutToken);
      })
      .catch((error) => {
        this.pushToHomePage();
      });
  }

  pushToHomePage() {
    this.props.history.push("/");
  }

  nextStep() {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  }

  previousStep() {
    this.setState({
      activeStep: this.state.previousStep - 1,
    });
  }

  next(data) {
    this.setState({
      shippingData: data,
    });
    // console.log(this.state.shippingData);
    this.nextStep();
  }

  Form = () => {
    return this.state.activeStep === 0 ? (
      <AddressForm checkoutToken={this.state.checkoutToken} next={this.next} />
    ) : (
      <PaymentForm
        shippingData={this.state.shippingData}
        previousStep={this.previousStep}
        next={this.next}
        nextStep={this.nextStep}
        checkoutToken={this.state.checkoutToken}
        captureCheckout={this.props.captureCheckout}
      />
    );
  };

  Confirmation = () =>
    this.props.order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {this.props.order.customer.firstname}{" "}
            {this.props.order.customer.lastname}!
          </Typography>
          <Divider className={this.props.classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {this.props.order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <div className={this.props.classes.spinner}>
        <CircularProgress />
      </div>
    );

  render() {
    const { classes } = this.props;
    const { checkoutToken } = this.state;
    // console.log(this.state.cart)

    return (
      <>
        <CssBaseline />
        <div className={classes.toolbar} />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper
              activeStep={this.state.activeStep}
              className={classes.stepper}
            >
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {this.state.activeStep === steps.length
              ? this.Confirmation()
              : checkoutToken && this.Form()}
          </Paper>
        </main>
      </>
    );
  }
}

const styleWithCheckout = withStyles(styles)(Checkout);
export default withRouter(styleWithCheckout);
