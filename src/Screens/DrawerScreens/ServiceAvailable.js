import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'
const ServiceAvailable = () => {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                {/* ----------------Andhra Pradesh----------------- */}
                <View style={styles.container}>
                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ANDHRA PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bhimavaram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bidar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Gulburga</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Guntur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Hyderabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kadapa</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Kakinada</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Karim Nagar</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Khammam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kurnool</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Manchiryal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Nadhyal</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Nellure</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Nizamabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Ongole</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Palasa</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Proddatur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Rajmundry</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Siddipet</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Srikakulam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Tirupati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Vijaywada</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Vishakhapatnam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Warangal</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Assam----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ASSAM</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Guwahati</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------BIHAR----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >BIHAR</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Aara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Aurangabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Buxer</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bihar Sharif</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Chapra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Darbhanga</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Dehri</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gaya</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Muzaffarpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Motihari</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Patna</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Siwan</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Chattisgarh----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >CHATTISGARH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bhilai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bilaspur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Durg</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Korba</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Rajnandgaon</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Raipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Delhi----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >DELHI</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Delhi-NCR</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Goa----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GOA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Panji</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Margao</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Gujarat----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >GUJARAT</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ahmedabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Anand</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Anjar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Baroda</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bhavnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bhuj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Billimora</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gandhidham</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Jamnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Jungarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Rajkot</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Surat</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Navsari</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Valsad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Wapi</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Haryana----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >HARYANA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bahadurgah</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ballabhgarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Bhiwani</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Faridabad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Fatehabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Hasi</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Hisar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Karnal</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kurukshetra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Mewat</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Panipat</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Rohtak</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Sonipat</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Himachal Pradesh----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >HIMACHAL PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Baddi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Parwanoo</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Jammu----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >JAMMU</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Jammu</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Kashmir----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KASHMIR</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kashmir</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------JHARKHAND----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >JHARKHAND</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bokaro</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Daltonganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Deoghar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Dhanbad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Giridih</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Hazaribagh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jamshedpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ranchi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Rourkela</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Karnataka----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KARNATKA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bokaro</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Daltonganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Deoghar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Dhanbad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Giridih</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Hazaribagh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jamshedpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ranchi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Rourkela</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>

                    {/* ----------------KERALA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >KERALA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Adoor</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Alappuzha</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Ernakulam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Idukki</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kannur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Karunagappally</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Kasaragod</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kayamkulam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kochi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kollam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Kottayam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kozhikode</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Malappuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Palakkad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Pathanamthitta</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Thalayolaparambu</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Thiruvalla</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Thiruvananthapuram</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Thrissur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Thodupuzha</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Trivandrum</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Wayanadu</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------MADHYA PRADESH----------------- */}

                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >MADHYA PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bhopal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Dewas</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Indore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Itarsi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Jabalpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ratlam</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Rewa</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ujjain</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------MAHARASHTRA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >MAHARASHTRA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Amaravati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Aurangabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Baramati</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bhayander</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Chandrapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Chhindwara</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Dahisar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Hupari</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jalgaon</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Karad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kankavali</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kolhapur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Mumbai Metropolitan</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Nagpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Nanded</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Nashik</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Pune</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ratnagiri</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Sangli</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Satara</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Thane</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Vashi</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------ODISHA----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >ODISHA</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bhubaneswar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bharampur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Cuttak</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------PUNJAB----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >PUNJAB</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Abohar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bhatinda</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Chandigarh</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Firozpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ganga Nagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Jagraon</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jalandhar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Nagpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ludhiana</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Muktsar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Nawashahar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Pathankot</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Patiala</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Sirhind</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------RAJASTHAN----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >RAJASTHAN</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ajmer</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Alwar</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Beawar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bhilwara</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Bikaner</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Chittor</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jaipur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Jodhpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kota</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kishangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Nathdwara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Pali</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kota</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kishangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Nathdwara</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Pali</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Rajsamand</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ratangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Sikar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Sujangarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Udaipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>


                    {/* ----------------Tamil Nadu----------------- */}


                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >TAMIL NADU</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ambur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Arcot</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Chennai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Coimbatore</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Cuddalore</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Dindigul</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Dindivanam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Eral</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Erode</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gudiyatham</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Kanchipuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kanyakumari</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Karaikal</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Karur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Kumbakonam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Madurai</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Marthandam</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Mayiladuthurai</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Ooty</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Palani</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Pondicherry</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Polur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Ramanathapuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Salem</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Sangarankovil</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Selam</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Thanjavur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Theni</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Tirunelveli</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Tirupathur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Tirupur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Tiruvannamalai</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Trichy</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Tuticorin</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Vanniyambadi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Vellore</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Villupuram</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Virudhachalam</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Udaipur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------Uttar Pradesh----------------- */}

                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >UTTAR PRADESH</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Agra</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Aligarh</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Azamgarh</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Awagarh</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Badayun</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Ballia</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Barabanki</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bareilly</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Basti</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bhadohi</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Bijnor</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Bulandshahar</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Deoria</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Dhualpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Etah</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Etawah</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Faizabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Farukhabad</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Firozabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gajraula</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Gazipur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gopiganj</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Gwalior</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gorakhpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Ghaziabad</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Gurgaon</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Hardoi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Hathras</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Itawa</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Jaunpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Jhansi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kanpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Kaushambi</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Lakimpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Lucknow</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Mathura</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Meerut</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Mau</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Mirzapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Moradabad</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Mughalsarai</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Muraina</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Muzaffar Nagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Prayagraj</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Rampur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Raebareilly</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Saharanpur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Shahjahanpur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Sitapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Sultanpur</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Thandla</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Tundla</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Unnao</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Varanasi</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Thanjavur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Theni</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------UTTRAKHAND----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >UTTRAKHAND</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Dehradun</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Haldwani</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Haridwar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kashipur</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row style={{ backgroundColor: "#f6f6f6" }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Pantnagar</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Roorkee</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row style={{ backgroundColor: "#f0f8ff", justifyContent: "space-between", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, }} >
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }}>Rudrapur</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    {/* ----------------WEST BENGAL----------------- */}
                    <DataTable>
                        <DataTable.Header style={{ marginTop: 20, backgroundColor: "#bc9954", borderTopRightRadius: 20, borderTopLeftRadius: 20, width: moderateScale(346), alignItems: "center" }} >
                            <DataTable.Title textStyle={{ fontSize: textScale(20), color: "white", fontWeight: "bold" }} style={{ justifyContent: "center", color: "black" }} >WEST BENGAL</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row style={{ backgroundColor: "#f6f6f6", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginBottom: 20 }}>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} >Durgapur</DataTable.Cell>
                            <DataTable.Cell textStyle={{ fontSize: textScale(15) }} style={{ marginRight: moderateScaleVertical(-50) }}>Kolkata</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </View>
            </ScrollView>
        </View>
    )
}

export default ServiceAvailable;

const styles = StyleSheet.create({
    container: {
        // paddingTop: 20,
        // paddingHorizontal: 30,
        alignItems: "center",
        alignSelf: "center",
        marginTop: moderateScaleVertical(20)
    },
    OurServiceAlignment: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 2
    },
    stateName: {

    },
    OurServiceText: {
        fontSize: 30,
        fontWeight: "bold",
        // fontStyle: "600",
        color: "#bc9954",
        textAlign: 'justify',
    },
    OurServiceline: {
        width: moderateScale(100),
        height: 3,
        backgroundColor: "#bc9954",
        marginBottom: 10,
        marginTop: 1,
        marginLeft: 20
    },
    StateNameAlignment: {
        // marginleft: 10
    },
    StateName: {
        fontSize: 30,
        marginLeft: 36,

    },
    citiesAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -50,
    },
    citiesStyle1: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
        fontWeight: "500"
    },
    citiesStyle2: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
        fontWeight: "500"
    },
    TotalAlignment: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -15,
    },
    TotalPaddingAlignment: {
        marginVertical: 5,

    },
    TotalSubChildAlignment: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },
    TotalSubChildAlignment2: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: "300",
        color: "black",
        marginVertical: 5,
    },

})