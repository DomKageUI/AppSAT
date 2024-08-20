import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f7c143', dark: '#282828' }}
      headerImage={
        <Image
          source={require('@/assets/images/crossplay.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Games Hub</ThemedText>
      </ThemedView>
      <ThemedText>Welcome to the ultimate games hub. Start exploring now!</ThemedText>

      <Collapsible title="Top Rated Games">
        <ThemedText>
          Discover the top-rated games across various platforms.
        </ThemedText>
        <ExternalLink href="https://www.metacritic.com/browse/game/?releaseYearMin=1958&releaseYearMax=2024&page=1">
          <ThemedText type="link">Check Top Games</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Latest Releases">
        <ThemedText>
          Stay updated with the latest game releases. Whether you're on PlayStation, Xbox, or PC,
          we’ve got you covered.
        </ThemedText>
        <ExternalLink href="https://www.gamespot.com/articles/2024-upcoming-games-release-schedule/1100-6518504/#:~:text=2024%20Upcoming%20Games%20Release%20Schedule%201%20January%20Devil,April%202%20Planetiles%20%28PC%29%20-%20April%203%20">
          <ThemedText type="link">See Latest Releases</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Gaming Hardware">
        <ThemedText>
          Explore the best hardware to enhance your gaming experience. From controllers to
          headsets, get the best gear for your setup.
        </ThemedText>
        <Ionicons name="headset" size={50} color="#f7c143" style={styles.icon} />
        <ExternalLink href="https://www.bestbuy.com/site/pc-gaming/pc-gaming-hardware/pcmcat159700050051.c?id=pcmcat159700050051">
          <ThemedText type="link">Best Gaming Gear</ThemedText>
        </ExternalLink>
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});
