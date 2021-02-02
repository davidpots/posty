---
permalink: "/2"
layout: home
---

<div class="tileWrapper" id="hashtags">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Hashtags</h2>
      <p class="tile-lastUpdated">Last updated Jan 31</p>
    </div>
    <div class="tile-body">
      {% for hashtag in site.data.hashtags %}
        <div class="tile-item tile-item--hashtag">
          <span class="tile-socialLinks"><a href="https://www.instagram.com/explore/tags/{{hashtag.name}}/" target="_blank">{% include icon-instagram.svg %}</a><a href="https://twitter.com/search?q=%23{{hashtag.name}}" target="_blank">{% include icon-twitter.svg %}</a></span>
          <h3>{{ hashtag.name }}</h3>
          <p>{{ hashtag.description }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</div>






<div class="tileWrapper" id="topics">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Upcoming Topics</h2>
      <p class="tile-lastUpdated">Last updated Jan 26</p>
    </div>
    <div class="tile-body">
      {% for topic in site.data.topics %}
        <div class="tile-item tile-item--topic">
          <span class="tile-emoji">{{ topic.emoji }}</span>
          <span class="tile-date"><strong>{{ topic.day }}</strong><small>{{ topic.date }}</small></span>
          <h3>{{ topic.name }}</h3>
          <p>{{ topic.description }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="tileWrapper" id="holidays">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Holidays</h2>
      <p class="tile-lastUpdated">Last updated Jan 21</p>
    </div>
    <div class="tile-body">
      <div class="tile-item"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
    </div>
  </div>
</div>









<div class="tileWrapper" id="posts">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Post Gallery</h2>
      <p class="tile-lastUpdated">Last updated Feb 1</p>
    </div>
    <div class="tile-body">
      {% for post in site.data.posts limit:8 %}
        <div class="tile-item tile-item--post">
          <div class="tile-item--post-image">
            <a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}"><img src="{{post.media}}" /></a>
          </div>
          <div class="tile-item--post-text">
            <p class="tile-postCaption">{{post.caption}}</p>
            <p class="tile-postMeta">{{post.vertical}} • {{post.category}}</p>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<br /><br /><br /><br /><br />
