import {StyleSheet} from 'react-native'
import colors from '../../assets/theme/colors'

export default StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    item:{
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center'
    },
    itemText:{
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20

    }
})