import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { HistoryCardProps } from "../../../../Utils/Types/HistoryCardProps";
import { styles } from "./HistoryCardStyle";

export const HistoryCard = ({
	title,
	description,
	value,
	onInfoPress,
	onDeletePress,
}: HistoryCardProps) => {
	return (
		<View style={styles.historyCard}>
			<View style={styles.cardContent}>
				<Text style={styles.titleText}>{title}</Text>
				<Text
					style={styles.descriptionText}
					numberOfLines={3}
					ellipsizeMode="tail"
				>
					{description}
				</Text>
				<Text style={styles.valueText}>R$ {value}</Text>
			</View>
			<View style={styles.cardActions}>
				<TouchableOpacity
					style={styles.actionButton}
					onPress={onInfoPress}
				>
					<Ionicons
						name="information-circle-outline"
						size={24}
						color="#1e1e1e"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.actionButton}
					onPress={onDeletePress}
				>
					<Ionicons name="trash" size={24} color="#a01919" />
				</TouchableOpacity>
			</View>
		</View>
	);
};
