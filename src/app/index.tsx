import { Background } from "expo-router/build/react-navigation";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

interface Pokemon {
  url: string | URL | Request;
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

interface PokemonType {
  type : {
  name: string;
  url: string;
  }
}

const colorsByType = {
  grass: "green",
  fire: "orange",
  water: "blue",
  bug: "lightgreen"
}

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  console.log(JSON.stringify(pokemons[0], null, 2));

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const data = await response.json();

      // Fetch detailed info for each Pokemon in parallel
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_shiny, // Shiny Sprite
            imageBack: details.sprites.back_shiny,
            types: details.types,
          };
        })
      );
      
      console.log(detailedPokemons);

      setPokemons(detailedPokemons);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      {pokemons.map((pokemon) => (
        <View key={pokemon.name} style={styles.card}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.type}>{pokemon.types[0].type.name}</Text>
          <View style={{
            flexDirection: "row"
          }}>
            <Image
              source={{ uri: pokemon.image }}
              style={{ width: 150, height: 150 }}
            />
            <Image
              source={{ uri: pokemon.imageBack }}
              style={{ width: 150, height: 150 }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  pokemonName: {
    fontSize: 20,
    textTransform: "capitalize",
  },

  type: {
    fontSize: 16,
    textTransform: "capitalize",
  }
});