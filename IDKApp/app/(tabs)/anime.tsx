import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export default function AnimeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFB6C1', dark: '#7B3F61' }}
      headerImage={
        <Image
          source={require('@/assets/images/anime.png')}
          style={styles.animeHeader}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Anime World</ThemedText>
      </ThemedView>
      <ThemedText>Discover the latest and greatest in the world of anime!</ThemedText>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Popular Anime</ThemedText>
        <ThemedText>
          Explore the most popular anime series and movies. From classics to the latest hits, dive into the best of anime.
        </ThemedText>
        <ExternalLink href="https://myanimelist.net/topanime.php">
          <ThemedText type="link">Check Top Anime</ThemedText>
        </ExternalLink>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Upcoming Releases</ThemedText>
        <ThemedText>
          Stay tuned for the upcoming anime releases. Whether you're into action, romance, or slice-of-life, there's something for everyone.
        </ThemedText>
        <ExternalLink href="https://anichart.net/">
          <ThemedText type="link">See Upcoming Releases</ThemedText>
        </ExternalLink>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Anime News</ThemedText>
        <ThemedText>
          Get the latest news and updates from the anime industry. New seasons, movie releases, and more!
        </ThemedText>
        <ExternalLink href="https://www.animenewsnetwork.com/">
          <ThemedText type="link">Read Anime News</ThemedText>
        </ExternalLink>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  animeHeader: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  section: {
    marginTop: 16,
  },
});
