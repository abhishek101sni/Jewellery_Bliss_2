import { View, Text, StyleSheet, Image, ScrollView, ImageBackground , SafeAreaView } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../utils/responsive'


const AboutUs = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ImageBackground style={{ flex: 1 }} source={require("../../assets/background-image2.png")}>
      <View style={{}}>
        <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
      </View>
      <ScrollView>
        <View style={styles.AboutUsContentAlignment2}>
          <View style={{ width: moderateScale(370) }}>
            <Text style={styles.AboutUsContent}>
              Welcome to Jewellery Bliss! We are amongst India’s largest B2B jewellery platform revolutionizing the jewellery industry through tech-led innovations. {'\n'}{'\n'}
              We are a team of experienced jewellery manufacturers and wholesalers who are dedicated to providing our clients with high-quality jewellery products at competitive prices. With years of experience in the industry, we understand the importance of delivering not only quality products but also exceptional customer service. We strive to build strong relationships with our clients by offering personalized attention and flexible solutions to meet their specific needs.{'\n'}{'\n'}
              We take great pride in our manufacturing process, which involves using the finest materials and the latest techniques to create pieces that are both elegant and durable. Our collection includes a wide range of jewellery products, from classic designs to trendy pieces, all of which are customizable to meet our client's unique requirements.{'\n'}{'\n'}
              At our core, we believe that success comes from building strong partnerships with our clients. That's why we place great importance on transparency and communication, working closely with our clients throughout the process to ensure that their needs are met and expectations are exceeded.{'\n'}{'\n'}
              Thank you for considering our company as your jewellery supplier. We look forward to building a long-lasting relationship with you and providing you with quality products and exceptional service.
            </Text>
          </View>
          <View>
            <Text style={styles.keyDriversText}>OUR KEY DRIVERS</Text>
          </View>

          <View style={{ marginTop: moderateScaleVertical(15), marginBottom: moderateScaleVertical(0), flexDirection: "row", justifyContent: "space-around", marginHorizontal: (6) }}>
            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.block} imageStyle={{
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
              <View style={styles.blockItems}>
                <Image source={require("../../assets/dp2.jpg")} style={styles.imageStyle} />
                <Text style={styles.founderName}>N.K. Jain</Text>
                {/* <Text style={styles.founderPosition}>Position</Text> */}
                {/* <Text style={styles.founderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text> */}
              </View>
            </ImageBackground>

            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.block} imageStyle={{
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
              <View style={styles.blockItems}>
                <Image source={require("../../assets/dp2.jpg")} style={styles.imageStyle} />
                <Text style={styles.founderName}>Shivangi Jain</Text>
                {/* <Text style={styles.founderPosition}>Position</Text> */}
                {/* <Text style={styles.founderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text> */}
              </View>
            </ImageBackground>
          </View>
          <View style={{ marginTop: moderateScaleVertical(15), marginBottom: moderateScaleVertical(0), flexDirection: "row", justifyContent: "space-around", marginHorizontal: (4) }}>
            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.block} imageStyle={{
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
              <View style={styles.blockItems}>
                <Image source={require("../../assets/dp2.jpg")} style={styles.imageStyle} />
                <Text style={styles.founderName}>Nikhil Jain</Text>
                {/* <Text style={styles.founderPosition}>Position</Text> */}
                {/* <Text style={styles.founderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text> */}
              </View>
            </ImageBackground>

            <ImageBackground source={require("../../assets/CompressedTexture3.jpg")} style={styles.block} imageStyle={{
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
              <View style={styles.blockItems}>
                <Image source={require("../../assets/dp2.jpg")} style={styles.imageStyle} />
                <Text style={styles.founderName}>Jai Sogani</Text>
                {/* <Text style={styles.founderPosition}>Position</Text> */}
                {/* <Text style={styles.founderDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text> */}
              </View>
            </ImageBackground>
          </View>

        </View>
      </ScrollView>
      <View style={{}}>
        <Image source={require("../../assets/GOLDEN-STRIP.png")} style={styles.goldenStrip} />
      </View>
    </ImageBackground>
    </SafeAreaView>

  )
}

export default AboutUs

const styles = StyleSheet.create({
  goldenStrip: {
    width: "100%",
    height: 3,
  },
  AboutUsAlignment: {
    marginTop: moderateScaleVertical(20),
    marginLeft: moderateScale(18),
    marginBottom: moderateScaleVertical(2)

  },
  AboutUsText: {
    fontSize: textScale(27),
    fontStyle: "600",
    color: "#bc9954",
    textAlign: 'justify',
  },
  AboutUsContentAlignment2: {
    justifyContent: "flex-start",
    marginBottom: moderateScaleVertical(30),
    marginTop: moderateScaleVertical(10),
  },
  AboutUsContent: {
    color: "#555555",
    fontSize: textScale(17),
    lineHeight: 28,
    fontFamily: "HurmeGeometricSans1",
    // marginHorizontal: 10,
    marginLeft: moderateScale(20),
    marginBottom: moderateScaleVertical(-15),
  },
  line: {
    width: "60%",
    height: moderateScale(1.5),
    backgroundColor: "white",
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(15),
    marginTop: moderateScaleVertical(10)
  },
  AboutUsline: {
    width: moderateScale(50),
    height: moderateScaleVertical(3),
    backgroundColor: "#bc9954",
    // alignSelf: 'center',
    marginBottom: moderateScaleVertical(10),
    marginTop: moderateScaleVertical(1),
    marginLeft: moderateScale(18),
    fontFamily: "Poppins-Medium"
  },
  keyDriversText: {
    textAlign: "center",
    fontSize: textScale(25),
    color: "#bc9954",
    fontWeight: "450",
    marginBottom: moderateScaleVertical(-3),
    fontFamily: "HurmeGeometricSans1",
    marginTop: moderateScaleVertical(22),
  },
  block: {
    // borderWidth: 1,
    // borderColor: '#bc9954',
    backgroundColor: "white",
    height: moderateScaleVertical(250),
    width: moderateScale(180),
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  blockItems: {
    alignSelf: "center",
    marginTop: moderateScaleVertical(8),
    alignItems: "center"
  },
  imageStyle: {
    marginTop: moderateScaleVertical(8),
    height: moderateScaleVertical(170),
    width: moderateScale(150),
    borderRadius: 10
  },
  founderName: {
    color: "black",
    fontSize: textScale(21),
    marginTop: moderateScaleVertical(10),
    fontFamily: "HurmeGeometricSans1",
  },
  founderPosition: {
    marginTop: moderateScaleVertical(-3),
    color: "black",
    fontSize: textScale(17),
    // fontFamily: "HurmeGeometricSans1SemiBold",
  },
  founderDescription: {
    marginTop: moderateScaleVertical(4),
    textAlign: "justify",
    marginHorizontal: moderateScale(15),
    color: "black",
    fontSize: textScale(14),
    fontWeight: "400",
    alignSelf: "center",
    fontFamily: "HurmeGeometricSans1SemiBold",
  }
})