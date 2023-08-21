import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const TaxInvoice = () => {
    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.parent}>

                    <View style={styles.TaxInvoiceAlignment}>
                        <Text style={styles.TaxInvoiceText}>TAX INVOICE</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.alignment1}>
                        <Text style={styles.jwelleryNameShop}>Abc Jwellers</Text>
                        <Text style={styles.address1}>
                            G 51-52 , Sector-18 , Noida , Gautam Budh Nagar , Noida 201301
                        </Text>
                    </View>

                    <View style={styles.line}></View>

                    {/* Payment information */}

                    <View style={styles.ParentPayment}>

                        <View style={styles.PaymentChildAlign1}>
                            <Text style={styles.PaymentSubChildAlign1}>Invoice No.</Text>
                            <Text style={styles.PaymentSubChildAlign1}>VP-1256</Text>
                            <Text style={styles.PaymentSubChildAlign1}>Payment Method</Text>
                        </View>

                        <View style={styles.PaymentChildAlign2}>
                            <Text style={styles.PaymentSubChildAlign2}>PayTm</Text>
                            <Text style={styles.PaymentSubChildAlign2}>Order Date</Text>
                            <Text style={styles.PaymentSubChildAlign2}>25 May 2019</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    {/*Billing -------------------------------------*/}

                    <View style={styles.BillingAlignment}>
                        <Text style={styles.BillingText}>            Billing Address</Text>
                        <Text style={styles.BillingAddress}>              G 51-52 , Sector-18 , Noida , Gautam Budh Nagar
                        </Text>
                    </View>

                    <View style={styles.line}></View>

                    {/*Shipping -------------------------------------*/}

                    <View style={styles.ShippingAlignment} >
                        <Text style={styles.ShippingText}>            Shipping Address</Text>
                        <Text style={styles.ShippingAddress}>               G 51-52 , Sector-18 , Noida , Gautam Budh Nagar</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.titles}>
                        <Text style={styles.SubTitles}>Item details</Text>
                        <Text style={styles.SubTitles}>Qty.</Text>
                        <Text style={styles.SubTitles}>Amount</Text>
                    </View>

                    <View style={styles.line}></View>

                    {/* Products---------------------------------------------------------------------------- */}

                    <View style={styles.ProductAlignment}>
                        <Text style={styles.ProductChildAlignment}>Gold Chain</Text>
                        <Text style={styles.ProductChildAlignment} >1</Text>
                        <Text style={styles.ProductChildAlignment}>14000.00</Text>
                    </View>

                    <View style={styles.ProductAlignment}>
                        <Text style={styles.ProductChildAlignment} >Gold Chain</Text>
                        <Text style={styles.ProductChildAlignment}>1</Text>
                        <Text style={styles.ProductChildAlignment}>14000.00</Text>
                    </View>


                    <View style={styles.line}></View>

                    <View style={styles.TotalAlignment}>
                        <View style={styles.TotalPaddingAlignment}>
                            <Text style={styles.TotalSubChildAlignment}>Item total</Text>
                            <Text style={styles.TotalSubChildAlignment}>CGST(1.5%)</Text>
                            <Text style={styles.TotalSubChildAlignment}>SGST(1.5%)</Text>
                            <Text style={styles.TotalSubChildAlignment}>Total</Text>
                            <Text style={styles.TotalSubChildAlignment}>Discount</Text>
                            <Text style={styles.TotalSubChildAlignment}>Grand Total</Text>
                        </View>
                        <View style={styles.TotalPaddingAlignment}>
                            <Text style={styles.TotalSubChildAlignment2}>29000.00</Text>
                            <Text style={styles.TotalSubChildAlignment2}>435</Text>
                            <Text style={styles.TotalSubChildAlignment2}>435</Text>
                            <Text style={styles.TotalSubChildAlignment2}>29870.00</Text>
                            <Text style={styles.TotalSubChildAlignment2}>1000.00</Text>
                            <Text style={styles.TotalSubChildAlignment2}>28870.00</Text>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>Company GST : AFAPG5544F</Text>
                        <Text style={styles.bottomText}>*Terms and Conditions Apply</Text>
                    </View>
                    {/* <View>
                    <TouchableOpacity style={styles.shareInvoiceButton}>
                        <Text style={styles.shareInvoicetext}>SHARE INVOICE</Text>
                    </TouchableOpacity>
                </View> */}
                    <TouchableOpacity>
                        <View style={styles.shareInvoiceButton}>
                            <Text style={styles.shareInvoicetext}>SHARE INVOICE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default TaxInvoice;

const styles = StyleSheet.create({
    main: {
        //    backgroundColor: "white",
        // width: 300,
        // alignItems:"center"
        justifyContent: "center"
    },
    parent: {
        // alignItems: "center",
    },
    TaxInvoiceAlignment: {
        fontSize: 15,
        marginBotton: 10,
        alignItems: "center",
    },

    TaxInvoiceText: {
        // width: "80%",
        marginTop: 50,
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
    line: {
        width: "80%",
        height: 1.5,
        backgroundColor: "#000",
        margin: 0,
        alignSelf: 'center',
        marginTop: 10,
    },
    alignment1: {
        flexDirection: "colomn",
        alignItems: "center"
    },

    jwelleryNameShop: {
        // fontWeight: 500,
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
        marginTop: 10,
    },

    address1: {
        color: "#7d7d7d",
        // fontWeight: 500,
        fontSize: 12,
        marginBottom: 10,
        marginTop: 4,
        // marginleft: 50,
    },

    // --------------------------------------------------------------------------------------------------------------

    ParentPayment: {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: -5,
        marginVertical: 15,
    },
    PaymentChildAlign1: {
        flexDirection: "column",
        // justifyContent: 'space-between',
    },
    PaymentChildAlign2: {
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    PaymentSubChildAlign1: {
        flexDirection: "column",
        marginVertical: 5,
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        fontWeight: "500",
    },
    PaymentSubChildAlign2: {
        textAlign: 'right',
        marginVertical: 5,
        fontSize: 14,
        fontWeight: "500",
        color: "black"
    },

    // Billing---------------------------------------------------------------------------------------------------

    BillingAlignment: {
        marginVertical: 13,

    },

    BillingText: {
        color: "black",
        fontWeight: "700",
        // fontWeight: "bold",
        fontSize: 17,
    },

    BillingAddress: {
        fontWeight: "600",

    },

    // ---------------------------------------------------------------------------------------------------


    // Billing---------------------------------------------------------------------------------------------------

    ShippingAlignment: {
        marginVertical: 13,
    },

    ShippingText: {
        color: "black",
        fontWeight: "700",
        // fontWeight: "bold",
        fontSize: 17,
    },

    ShippingAddress: {
        fontWeight: "600",
    },

    // ---------------------------------------------------------------------------------------------------

    titles: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 0,
    },
    SubTitles: {
        color: "black",
        fontWeight: "500",
        // fontWeight: "bold",
        fontSize: 17,
        textAlign: "left"
    },

    // ---------------------------------------------------------------------------------------------------

    ProductAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -10,

    },
    ProductChildAlignment: {
        color: "black",
        fontWeight: "500",
        fontSize: 15,
    },

    // ---------------------------------------------------------------------------------------------------

    TotalAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -63,
    },
    TotalPaddingAlignment: {
        marginVertical: 5,

    },

    TotalSubChildAlignment: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: "500",
        color: "black"
    },

    TotalSubChildAlignment2: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight: "500",
        color: "black"
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
        marginHorizontal: 2
    },
    bottomText: {
        color: "#7d7d7d",
        marginLeft: 10,
        // fontWeight: 400,
        fontSize: 12,
        marginRight: 27,
        marginLeft: -10,
    },

    //   COLOMN 10 CSS---------------------
    shareInvoiceButton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 60,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    shareInvoicetext: {
        fontSize: 20,
        color: "black",
    },
});

