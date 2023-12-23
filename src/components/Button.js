// @flow

import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from './context/ThemeContext'
import { Styles } from './styles/GlobalStyles'

/**
 * @typedef {Object} ButtonProps
 * @property {() => void} onPress
 * @property {string} title
 * @property {boolean} isBlue
 * @property {boolean} isGray
 */

/**
 * @param {ButtonProps} props
 */
export default function Button({ title, onPress, isBlue, isGray }) {

    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={
                isBlue
                ? Styles.btnBlue
                : isGray
                ? Styles.btnGray
                : theme === "light"
                ? Styles.btnLight
                : Styles.btnDark
            }

            onPress={onPress}>

            <Text 
                style= {
                    isBlue || isGray
                    ? Styles.smallTextLight
                    : theme === "dark"
                    ? Styles.smallTextLight
                    : Styles.smallTextDark
                }
            >
                { title }
            </Text>

        </TouchableOpacity>
    )

}