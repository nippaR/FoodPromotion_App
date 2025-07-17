import { useColorScheme, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({ style, safe = false, customPadding = {}, ...props }) => {
    const userInterfaceStyle = useColorScheme();
    const theme = Colors[userInterfaceStyle] ?? Colors.light;

    if (!safe) return (
        <View
            style={[{ flex: 1, backgroundColor: theme.background }, style]}
            {...props}
        />
    );

    const insets = useSafeAreaInsets();
    console.log('insets', insets);

    // Destructure custom padding values with defaults
    const { paddingTop = 0, paddingBottom = 0, paddingLeft = 0, paddingRight = 0 } = customPadding;

    return (
        <View
            style={[
                {
                    flex: 1,
                    backgroundColor: theme.background,
                    paddingTop: insets.top + paddingTop,
                    paddingBottom: insets.bottom + paddingBottom,
                    paddingLeft: insets.left + paddingLeft,
                    paddingRight: insets.right + paddingRight,
                },
                style
            ]}
            {...props}
        />
    );
}

export default ThemedView;