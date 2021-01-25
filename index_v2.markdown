---
permalink: "/2"
layout: home
---

<h2>Upcoming topics</h2>

<ul class="list-plain topic_list">
{% for topic in site.data.topics %}
  <li>
    <div class="topic_emoji">{{ topic.emoji }}</div>
    <div class="topic_date">{{ topic.day }}, {{ topic.date }}</div>
    <div class="topic_name">{{ topic.name }}</div>
    <div class="topic_desc">{{ topic.description }}</div>
    <div class="topic_hashtags">{% for ht in topic.hashtags %}#{{ ht }}&nbsp;&nbsp;{% endfor %}</div>
  </li>
{% endfor %}
</ul>

<h2>Post Inspiration</h2>

<ul class="post-gallery">
{% for post in site.data.posts %}
  <li>
    <img src="{{post.media}}" />
    <p class="caption">{{post.caption}}</p>
  </li>
{% endfor %}
</ul>
