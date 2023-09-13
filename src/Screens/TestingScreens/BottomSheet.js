/* eslint-disable react-native/no-inline-styles */
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    Image,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Actionsheet} from 'native-base';
  import LinearGradient from 'react-native-linear-gradient';
  import {useSelector} from 'react-redux';
  
  import {
    moderateScale,
    moderateScaleVertical,
    textScale,
  } from '../../utils/responsive';
  
  import store from '../../redux/store';
  import types from '../../redux/types';
  import {ShowInfo, ShowSuccess} from '../../utils/utils';
  
  const {dispatch} = store;
  
  const CategoryBottomSheet = ({isOpen, onClose, onPress}) => {
    const [Selected, setSelected] = useState(0);
  
    const {CategoriesAndSubcategories, SelectedCategories} = useSelector(
      state => state.NanoTourCreateItineraryReducer,
    );
  
    const subcategories = CategoriesAndSubcategories.map((item, index) => ({
      key: index,
      subcategoriesList: item.children,
    }));
  
    return (
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content alignItems={'flex-start'}>
          <Text
            style={{
              marginTop: moderateScaleVertical(10),
              marginBottom: moderateScaleVertical(20),
              marginHorizontal: moderateScale(15),
              fontSize: textScale(18),
              color: '#797979',
              fontFamily: 'Poppins-SemiBold',
            }}>
            Choose your favorite interest
          </Text>
          <ScrollView horizontal>
            {CategoriesAndSubcategories.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    setSelected(index);
                    console.log('CATEGORY ITEM', item);
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: Selected === index ? 3 : 0,
                    borderBottomColor: '#FF4636',
                    marginHorizontal: moderateScale(10),
                    paddingBottom: moderateScale(8),
                    paddingHorizontal: moderateScale(8),
                  }}>
                  <Image
                    source={{
                      uri: item?.thumbnailUrl,
                    }}
                    style={{
                      width: moderateScale(33),
                      height: moderateScaleVertical(35),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: textScale(18),
                      fontFamily: 'Poppins-Medium',
                      marginLeft: moderateScale(5),
                    }}>
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
          <View>
            {subcategories?.map(item => {
              if (item.key === Selected) {
                return (
                  <View style={styles.subcategoriesMainContainer}>
                    {item?.subcategoriesList?.map(subcategoryItem => {
                      if (
                        SelectedCategories !== [] &&
                        SelectedCategories?.find(
                          x => x.title === subcategoryItem.title,
                        )
                      ) {
                        return (
                          <Pressable
                            onPress={async () => {
                              const arr = await SelectedCategories.filter(
                                data => data.title !== subcategoryItem.title,
                              );
                              dispatch({
                                type: types.REMOVE_SELECTED_CATEGORY,
                                payload: arr,
                              });
                            }}>
                            <LinearGradient
                              start={{x: 0, y: 0}}
                              end={{x: 2, y: 0}}
                              style={styles.subcategoryContainer}
                              colors={['#F82E5D', '#FB8B16']}>
                              <View
                                style={{
                                  //backgroundColor: '#F6F6F6',
                                  padding: moderateScale(15),
                                  paddingHorizontal: moderateScale(19),
                                  borderRadius: 30,
                                }}>
                                <Text
                                  style={[
                                    styles.subcategoryText,
                                    {color: '#fff'},
                                  ]}>
                                  {subcategoryItem.title}
                                </Text>
                              </View>
                            </LinearGradient>
                          </Pressable>
                        );
                      } else {
                        return (
                          <Pressable
                            onPress={() => {
                              if (SelectedCategories.length + 1 <= 5) {
                                dispatch({
                                  type: types.STORE_SELECTED_CATEGORY,
                                  payload: subcategoryItem,
                                });
                                console.log(
                                  'SELECTED SUBCATEGORY',
                                  subcategoryItem,
                                );
                              } else {
                                ShowInfo(
                                  'Max Limit Reached',
                                  'Only 5 Selections Allowed',
                                );
                              }
                            }}>
                            <LinearGradient
                              style={styles.subcategoryContainer}
                              colors={['#F82E5D', '#FB8B16']}>
                              <View
                                style={{
                                  backgroundColor: '#F6F6F6',
                                  padding: moderateScale(15),
                                  paddingHorizontal: moderateScale(19),
                                  borderRadius: 30,
                                }}>
                                <Text style={styles.subcategoryText}>
                                  {subcategoryItem.title}
                                </Text>
                              </View>
                            </LinearGradient>
                          </Pressable>
                        );
                      }
                    })}
                  </View>
                );
              }
            })}
            <View
              style={{
                alignItems: 'center',
                marginBottom: moderateScaleVertical(10),
              }}>
              <Pressable
                style={{
                  width: '30%',
                }}
                onPress={() => {
                  // console.log(SelectedItems);
                  onPress();
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 2, y: 0}}
                  style={{
                    borderRadius: 12,
                  }}
                  colors={['#F82E5D', '#FB8B16']}>
                  <View
                    style={{
                      alignItems: 'center',
                      //backgroundColor: '#F6F6F6',
                      padding: moderateScale(10),
                      borderRadius: 12,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: textScale(14),
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Create
                    </Text>
                  </View>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    );
  };
  
  export default CategoryBottomSheet;
  
  const styles = StyleSheet.create({
    subcategoriesMainContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginVertical: moderateScaleVertical(20),
    },
    subcategoryContainer: {
      marginHorizontal: moderateScale(10),
      marginVertical: moderateScaleVertical(10),
      padding: moderateScale(1.5),
      borderRadius: 30,
      // elevation: 2,
    },
    subcategoryText: {
      color: '#797979',
      fontSize: textScale(14),
      fontFamily: 'Poppins-Regular',
      flexWrap: 'wrap',
    },
    btnActive: {
      width: '30%',
      //marginTop: moderateScale(15),
      marginBottom: moderateScaleVertical(20),
      marginRight: moderateScale(10),
      borderRadius: 12,
      borderWidth: 1,
    },
    LinearGradient: {
      flex: 1,
      alignItems: 'center',
      padding: moderateScale(20),
      borderRadius: 12,
    },
  });