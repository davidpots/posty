---
layout: home
---



<p style="margin: 16px 0 0 0;"><img class="page-logo" src="/assets/images/logo.svg" /></p>

<div class="tileWrapper" id="hashtags">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Hashtags</h2>
      <p class="tile-lastUpdated">Last updated Mar 5</p>
    </div>
    <div class="tile-body">
      {% for hashtag in site.data.hashtags %}
        <div class="tile-item tile-item--hashtag">
          <span class="tile-socialLinks"><a href="https://www.instagram.com/explore/tags/{{hashtag.name}}/" target="_blank">{% include icon-instagram.svg %}</a><a href="https://twitter.com/search?q=%23{{hashtag.name}}" target="_blank">{% include icon-twitter.svg %}</a></span>
          <h3>{{ hashtag.name }}<a data-hashtag="#{{ hashtag.name }}" class="copy-button copy-hashtag" href="#">copy</a></h3>
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
      <p class="tile-lastUpdated">Last updated Mar 5</p>
    </div>
    <div class="tile-body">
      {% for topic in site.data.topics %}
        <div class="tile-item tile-item--topic">
          <span class="tile-emoji">{{ topic.emoji }}</span>
          <span class="tile-date"><strong>{{ topic.day }}</strong><small>{{ topic.date }}</small></span>
          <h3>{{ topic.name }}</h3>
          <p>{{ topic.description }}</p>
          {% if topic.hashtags %}
            <p class="tile-item--footer">
            {% for ht in topic.hashtags %}
              #{{ ht }}&nbsp;
            {% endfor %}
            </p>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="tileWrapper" id="holidays">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Holidays</h2>
      <p class="tile-lastUpdated">Last updated Mar 5</p>
    </div>
    <div class="tile-body">
    {% for holiday in site.data.holidays %}
      <div class="tile-item tile-item--topic">
        <span class="tile-emoji">{{ holiday.emoji }}</span>
        <span class="tile-date"><strong>{{ holiday.day }}</strong><small>{{ holiday.date }}</small></span>
        <h3>{{ holiday.name }}</h3>
        <p>{{ holiday.description }}</p>
        <p class="tile-item--link"><a href="{{ holiday.url }}" target="_blank">Learn more »</a></p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>









<div class="tileWrapper" id="posts">
  <div class="tile">
    <div class="tile-heading">
      <h2 class="tile-title">Post Gallery</h2>
      <p class="tile-lastUpdated">Last updated Mar 5</p>
      <p class="tile-post-filters filter-item-wrapper filter-links--category">
        <a class="filter-item filter-item--all filter-item--active" data-filterName="All Categories" href="">All Categories</a>
        <a class="filter-item" data-filterName="Product/Service" href="">Product/Service</a>
        <a class="filter-item" data-filterName="Educational" href="">Educational</a>
        <a class="filter-item" data-filterName="About the Business" href="">About</a>
        <a class="filter-item" data-filterName="Audience Participation" href="">Participation</a>
      </p>
    </div>
    <div class="tile-body filter-items--category">
      {% for post in site.data.posts limit: 20 %}
        <div class="tile-item tile-item--post clearfix" data-category="{{post.category}}">
          <div class="tile-item--post-image">
            <a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}"><img src="{{post.media}}?width=150" /></a>
          </div>
          <div class="tile-item--post-text">
            <p class="tile-postCaption">{{post.caption}}</p>
            <p class="tile-postMeta" style="background-image: url(/assets/images/icon-tag.svg);">{{post.vertical}} • {{post.category}}</p>
            <p class="tile-postMeta" style="background-image: url(/assets/images/icon-author.svg);"><a target="_blank"  href="{{post.passport_link}}">{{post.author}}</a></p>
            <div class="tile-item--post-comment">{{post.comment}}</div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<br /><br /><br /><br /><br />
