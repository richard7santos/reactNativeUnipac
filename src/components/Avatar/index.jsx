import { StyleSheet, View } from "react-native";

const Avatar = (props) => {
	const avatarStyle = StyleSheet.create({
		styleAvatar: {
			backgroundColor: props.cor,
			width: 50,
			height: 50,
			borderRadius: 50,
		},
	});

	return <View style={avatarStyle.styleAvatar}></View>;
};

export default Avatar;
