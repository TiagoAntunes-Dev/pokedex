import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { Link } from "expo-router";

interface Pokemon {
  url: string | URL | Request;
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

const colorsByType: Record<string, string> = {
  normal: "#dbdbcc",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#c0d332",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20",
      );
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_shiny,
            imageBack: details.sprites.back_shiny,
            types: details.types,
          };
        }),
      );

      setPokemons(detailedPokemons);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      {pokemons.map((pokemon) => {
        const primaryType = pokemon.types[0]?.type.name;
        const cardBgColor = (colorsByType[primaryType] || "#ccc") + "40";

        return (
          <View
            key={pokemon.name}
            style={[styles.card, { backgroundColor: cardBgColor }]}
          >
            <Link href={`/details/${pokemon.name}` as any} style={styles.linkWrapper}>
              <View style={styles.linkContainer}>
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
                <Text style={styles.type}>{primaryType}</Text>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: pokemon.image }}
                    style={styles.sprite}
                  />
                  <Image
                    source={{ uri: pokemon.imageBack }}
                    style={styles.sprite}
                  />
                </View>
              </View>
            </Link>
          </View>
        );
      })}
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
    marginVertical: 8,
    borderRadius: 20,
    width: "100%",
    overflow: "hidden",
  },
  linkWrapper: {
    width: "100%",
  },
  linkContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  type: {
    fontSize: 16,
    textTransform: "capitalize",
    opacity: 0.8,
    marginBottom: 12,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sprite: {
    width: 120,
    height: 120,
  },
});