---
permalink: "/1"
layout: home_v1
---

<h2>Trending this week</h2>

<h3>Hashtags</h3>
<ul>
{% for hashtag in site.data.hashtags %}
  <li>
    <strong class="highlighted">#{{ hashtag.name }}</strong> - {{ hashtag.description }} <span class="light small">( <a class="light underline" href="https://www.instagram.com/explore/tags/{{hashtag.name}}/" target="_blank">Instagram</a> | <a class="light underline" href="https://twitter.com/search?q=%23{{hashtag.name}}" target="_blank">Twitter</a> )</span><br /><br />
  </li>
{% endfor %}
</ul>

<h3>Topics</h3>

<ul>
{% for topic in site.data.topics %}
  <li>
    <strong class="highlighted">{{ topic.name }}</strong> - {{ topic.description }}<br /><br />
  </li>
{% endfor %}
</ul>

<h2>Post Inspiration</h2>

<ul class="post-gallery">
{% for post in site.data.posts limit:8 %}
  <li>
    <img src="{{post.media}}" />
    <p class="caption">{{post.caption}}</p>
  </li>
{% endfor %}
</ul>




<h2>Upcoming Holidays</h2>

<table>
<tr>
  <th>Holiday</th>
  <th>Date</th>
  <th>Day</th>
  <th>Notes</th>
</tr>
{% for holiday in site.data.holidays %}
  <tr>
    <td><strong class="highlighted">{{ holiday.name }}</strong></td>
    <td>{{ holiday.date }}</td>
    <td>{{ holiday.day }}</td>
    <td>{{ holiday.description }}</td>
  </tr>
{% endfor %}
</table>
