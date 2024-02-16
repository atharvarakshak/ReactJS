// File name App.js 
import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import Constants from 'expo-constants'; 

const Home=()=>{ 
return ( 
	<Text style={{ 
					marginTop:300, 
					marginLeft:10}}> 
		Geeksforgeeks 
	</Text> 
) 
} 


export default function App() { 
return ( 
	<View> 
		<Home/> 
	</View> 
); 
} 
