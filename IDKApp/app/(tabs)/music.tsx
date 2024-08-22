import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export default function Music() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFB6C1', dark: '#06F5F8' }}
      headerImage={
        <Image
          source={require('@/assets/images/apple.png')}
          style={styles.animeHeader}
          resizeMode="cover"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Music Hub</ThemedText>
      </ThemedView>
      <ThemedText>Discover the latest and greatest in the world of music!</ThemedText>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Drake vs Kendrick</ThemedText>
        <ExternalLink href="https://youtu.be/2hjA_L7yjfY?si=bklxbcU2KSNjerzL"></ExternalLink>
        <ThemedText>
          The beef of the Century
        </ThemedText>
        <ExternalLink href="https://www.youtube.com/playlist?list=RDCLAK5uy_kmPRjHDECIcuVwnKsx2Ng7fyNgFKWNJFs&playnext=1&index=1">
          <ThemedText type="link">Check Top Music</ThemedText>
        </ExternalLink>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Upcoming Releases</ThemedText>
        <ThemedText>
          Stay tuned for the upcoming music releases. Whether you're into Rap, Pop, or R&B, there's something for everyone.
        </ThemedText>
        <ExternalLink href="https://www.metacritic.com/browse/albums/release-date/coming-soon/date">
          <ThemedText type="link">See Upcoming Releases</ThemedText>
        </ExternalLink>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Music News</ThemedText>
        <ThemedText>
          Get the latest news and updates from the music industry. New songs, music releases, and more!
        </ThemedText>
        <ExternalLink href="https://www.music-news.com/">
          <ThemedText type="link">Read Music News</ThemedText>
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
    height: 250,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  section: {
    marginTop: 16,
  },
});
