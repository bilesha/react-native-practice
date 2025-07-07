import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import {styles } from '@/styles/feed.styles'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image';
import { COLORS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Post({ post }: { post: any }) {
  return (
    <View style={styles.post}>
      {/* Post Header */}

      <View style={styles.postHeader}>
        <Link href={"/(tabs)/notifications"}>
          <TouchableOpacity style={styles.postHeaderLeft}>
            <Image
              source={post.author.image}
              style={styles.postAvatar}
              contentFit="cover"
              transition={200}
              cachePolicy="memory-disk"
            />
            <Text style={styles.postUsername}>{post.author.usrname}</Text>
          </TouchableOpacity>
        </Link>
        {/* show a delete button todo: */}
        <TouchableOpacity >
          <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <Image
        source={post.author.image}
        style={styles.postAvatar}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
      />
      /* Post Content */
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity>
            <Ionicons name={"heart-outline"} size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={"chatbubble-outline"} size={22} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={"bookmark-outline"} size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Post info */}
        <View style={styles.postInfo}>
          <Text style={styles.likesText}>Be the first tot like</Text>
          {post.caption && (
            <View style={styles.captionContainer}>
              <Text style={styles.captionContainer}>{post.author.username} </Text>
              <Text style={styles.captionUsername}>{post.author.username} </Text>
            </View>
          )}

          <TouchableOpacity>
            <Text style={styles.commentsText}>View all 2 comments</Text>
          </TouchableOpacity>

          <Text style={styles.timeAgo}>2 hours ago</Text>
        </View>
      </View>
    </View>
  )
}