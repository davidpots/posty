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
    <div class="topic_hashtags">{% for ht in topic.hashtags %}#<a class="light" href="https://www.instagram.com/explore/tags/{{ht}}/" target="_blank">{{ht}}</a>&nbsp;&nbsp;{% endfor %}</div>
  </li>
{% endfor %}
</ul>

<h2>Post Inspiration</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts limit:8 %}
  <li>
    <!-- <img src="{{post.media}}" /> -->
    <div>
    <!-- <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p> -->
    <p class="caption">{{post.caption}}</p>
    <!-- <p class="post_type"><a href="/posts#{{post.vertical}}">{{post.vertical}}</a> • {{post.category}}</p> -->
    </div>
  </li>
{% endfor %}
</ul>
