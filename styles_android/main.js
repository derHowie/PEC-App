import {StyleSheet} from 'react-native';

// COLOR BLOCK --- COLOR BLOCK --- COLOR BLOCK --- COLOR BLOCK --- //
var colorChoice = 1;
const mainColor = 'rgb(75, 162, 212)';
const mainColorTransp = 'rgba(75, 162, 212, 0.52)';
const mainColorDark = '#3D85AD';

const darkGray = 'rgb(66, 66, 66)';
const gray = 'rgb(133, 133, 133)';
const lightGray = 'rgb(214, 214, 214)';

// [END] COLOR BLOCK --- COLOR BLOCK --- COLOR BLOCK --- COLOR BLOCK --- //

const styles = StyleSheet.create({

// HOME.js --- HOME.js --- HOME.js --- HOME.js --- HOME.js --- //

  mainColorDark: {
    backgroundColor: mainColorDark
  },
  homeTitle: {
    fontSize: 22,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AlegreyaSansSC-Bold',
    marginTop: 2,
    textAlign: 'center'
  },
  homeYear: {
    fontSize: 86,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: mainColor,
    marginTop: -10,
    marginBottom: -5,
    fontFamily: 'Baskerville',
    textAlign: 'center'
  },
  homeSmallText: {
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
    marginTop: 25,
    opacity: .84,
    fontFamily: 'Optima',
    textAlign: 'center'
  },
  homePageThin: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Josefin Sans'
  },
  homePageHighlight: {
    color: mainColor,
    fontSize: 22,
    fontFamily: 'AlegreyaSansSC-Bold',
    textAlign: 'center'
  },
  darkHeader: {
    backgroundColor: '#424242',
  },
  darkHeaderTitle: {
    color: mainColor,
    fontSize: 22,
    fontFamily: 'Josefin Sans'
  },
  bgImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Josefin Sans',
    padding: 15,
    paddingBottom: 0,
    marginTop: 14
  },
  homeButton: {
    backgroundColor: mainColor,
    marginTop: 25,
    marginLeft: 55,
    marginRight: 55,
    marginBottom: -10
  },
  uofa: {
    color: mainColor,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Josefin Sans',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  deptOfPhys: {
    color: 'white',
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AlegreyaSansSC-Regular',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  scrollViewOverflow: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  homeTown: {
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: darkGray,
    opacity: .8,
    fontFamily: 'Optima',
    marginBottom: 5,
    marginTop: 4,
    textAlign: 'center'
  },

  // [END] HOME.js --- HOME.js --- HOME.js --- HOME.js --- HOME.js --- //

  // SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- //
  dateImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: 160
  },
  dateMonth: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Optima',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 0,
    opacity: .8
  },
  dateDay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Baskerville',
    color: mainColor,
    fontSize: 74,
    textAlign: 'center',
    marginTop: -15,
    marginBottom: -10
  },
  dateYear: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Josefin Sans',
    color: 'white',
    opacity: .72,
    fontSize: 22,
    textAlign: 'center'
  },
  time: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Baskerville',
    marginLeft: 12,
    marginTop: 5,
    paddingBottom: 15,
    color: 'white'
  },
  eventLink: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: mainColor,
    alignItems: 'center'
  },
  location: {
    marginTop: 4,
    marginLeft: 10,
    color: 'white',
    paddingTop: 15,
    fontFamily: 'Josefin Sans',
    fontSize: 28,
    flex: .8
  },
  scheduleHeader: {
    fontFamily: 'AlegreyaSansSC-Black',
    color: mainColor,
    fontSize: 24,
    marginLeft: 8,
    marginTop: 15
  },
  bigRegText: {
    fontFamily: 'Baskerville',
    margin: 10,
    fontSize: 18,
    marginTop: 0,
    color: 'black'
  },
  regText: {
    fontFamily: 'Baskerville',
    margin: 10,
    fontSize: 16,
    color: 'black'
  },
  smallRegText: {
    fontFamily: 'Baskerville',
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    color: gray
  },
  blueText: {
    fontFamily: 'AlegreyaSansSC-Bold',
    margin: 10,
    marginTop: 5,
    fontSize: 20,
    color: mainColor
  },
  scheduleLinkInfo: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    color: 'white',
    margin: 10,
    marginLeft: 12,
    marginTop: 0
  },
  talkTime: {
    fontFamily: 'Josefin Sans',
    fontSize: 18,
    color: gray,
    margin: 10,
    marginTop: 14
  },
  talkArrow: {
    height: 20,
    flex: .1,
    marginTop: 4
  },
  scheduleNote: {
    margin: 8
  },
  subMenuContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: mainColor
  },
  subMenuButtonContainer: {
    flex: .33
  },
  subMenuImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subMenuMonth: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Optima',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 0,
    opacity: .95,
    marginBottom: -10
  },
  subMenuDate: {
    fontFamily: 'Josefin Sans',
    color: 'white',
    textAlign: 'center',
    fontSize: 74,
    opacity: .95,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: -10
  },
  subMenuHeader: {
    backgroundColor: 'white'
  },
  subMenuHeaderText: {
    color: mainColor,
    fontFamily: 'Josefin Sans',
    fontSize: 22,
    textAlign: 'center'
  },
  sectionHeader: {
    fontSize: 20,
    textAlign: 'center'
  },
  hidden: {
    height: 0
  },

  // [END] SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- SCHEDULE.js --- //

  speakerImage: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: 220
  },
  speakerTalkTitleContainer: {
    backgroundColor: mainColor,
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0
  },
  speakerName: {
    fontSize: 28,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
    marginLeft: 8,
    marginTop: 10,
    width: 250,
    fontWeight: 'bold'
  },
  speakerText: {
    fontFamily: 'Baskerville',
    margin: 35,
    marginTop: 30,
    fontSize: 16,
    color: darkGray
  },
  speakerTalkTitle: {
    fontFamily: 'Josefin Sans',
    fontSize: 26,
    color: 'white',
    marginTop: 8
  },
  speakerHeader: {
    fontFamily: 'AlegreyaSansSC-Bold',
    color: mainColor,
    fontSize: 24,
    marginLeft: 8,
    marginTop: 15
  },
  speakerLinkInfo: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    color: 'white',
    marginTop: 6,
    marginLeft: 2,
    marginBottom: 5
  },
  exhibitorLinkContainer: {
    backgroundColor: mainColor,
    marginTop: 4,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  exhibitorLinkText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Josefin Sans',
    margin: 10
  },
  exhibitorDetails: {
    fontFamily: 'Baskerville',
    margin: 10,
    fontSize: 16
  },
  exhibitorWebsite: {
    fontFamily: 'Baskerville',
    fontSize: 18,
    margin: 10,
    marginTop: 0,
    color: 'white'
  },
  exhibitorPhone: {
    fontFamily: 'AlegreyaSansSC-Bold',
    fontSize: 20,
    margin: 10,
    marginTop: 4,
    color: 'white'
  },
  floorPlanContainer: {
    flex: 1,
    marginTop: 20,
    height: 420
  },
  floorPlan: {
    flex: 1,
    height: null,
    width: null
  },
  resourceHeader: {
    fontFamily: 'Josefin Sans',
    fontSize: 26,
    color: 'white',
    marginTop: 8
  },
  resourceHeaderContainer: {
    backgroundColor: mainColor,
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  resourceLink: {
    fontFamily: 'Baskerville',
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    flex: .9,
    color: 'white'
  },
  resourceLinkContainer: {
    backgroundColor: mainColor,
    marginTop: 15
  },
});

export default styles;
