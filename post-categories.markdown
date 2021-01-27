---
permalink: "/post-category"
layout: home
---

<h2 id="Product or Service">Product or Service</h2>

<ul class="post-gallery">
{% for post in site.data.posts %}
  {% if post.category == "Product or Service" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a> • <a href="/posts#{{post.vertical}}">{{post.vertical}}</a></p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>


<h2 id="About">About</h2>

<ul class="post-gallery">
{% for post in site.data.posts %}
  {% if post.category == "About" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a> • <a href="/posts#{{post.vertical}}">{{post.vertical}}</a></p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>



<h2 id="Educational">Educational</h2>

<ul class="post-gallery">
{% for post in site.data.posts %}
  {% if post.category == "Educational" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a> • <a href="/posts#{{post.vertical}}">{{post.vertical}}</a></p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>



<h2 id="Participation">Participation</h2>

<ul class="post-gallery">
{% for post in site.data.posts %}
  {% if post.category == "Participation" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a> • <a href="/posts#{{post.vertical}}">{{post.vertical}}</a></p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>
