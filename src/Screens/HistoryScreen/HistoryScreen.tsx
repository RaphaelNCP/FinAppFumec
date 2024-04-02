import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";
import { Container } from "../../Components/StyledComponents/Container";
import { Title } from "../../Components/StyledComponents/Title";
import { HistoryCard } from "./Components/HistoryCard";

export const HistoryScreen = () => {
	return (
		<Container>
			<StatusBar style="light" backgroundColor="black" />
			<Title>Histórico</Title>
			<ScrollView>
				<HistoryCard
					title="Salário"
					description="Recebimento do pagamento desse mês e meus beneficios"
					value="3500,00"
					onInfoPress={() => {}}
					onDeletePress={() => {}}
				/>
				<HistoryCard
					title="Fundo imobiliario"
					description="Retorno dos meus ivestimentos no fundo imobiliario"
					value="6230,00"
					onInfoPress={() => {}}
					onDeletePress={() => {}}
				/>
				<HistoryCard
					title="Restaurante italiano"
					description="Gastos com restaurante italiano com a familia"
					value="320.00"
					onInfoPress={() => {}}
					onDeletePress={() => {}}
				/>
				<HistoryCard
					title="Conta de luz"
					description="Conta de luz do mês de agosto"
					value="120.00"
					onInfoPress={() => {}}
					onDeletePress={() => {}}
				/>
			</ScrollView>
		</Container>
	);
};
