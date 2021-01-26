---
permalink: "/posts"
layout: home
---

<h1><a href="/2">« back to home</a></h1>

<h3>Browse by vertical:</h3>
<p>
  <a href="#Automotive">Automotive</a> |
  <a href="#Home Services">Home Services</a> |
  <a href="#Activities & Events">Activities & Events</a> |
  <a href="#Pets">Pets</a> |
  <a href="#Health & Wellness">Health & Wellness</a> |
  <a href="#Nightlife">Nightlife</a> |
  <a href="#Professional Services">Professional Services</a> |
  <a href="#Other">Other</a> |
  <a href="#Spas and Salons">Spas and Salons</a> |
  <a href="#Hotel">Hotel</a>
</p>

<h2 id="Automotive">Automotive</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Automotive" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>


<h2 id="Home Services">Home Services</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Home Services" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<h2>Activities & Events</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Activities & Events" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Pets">Pets</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Pets" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Activities & Events">Activities & Events</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Activities & Events" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Health & Wellness">Health & Wellness</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Health & Wellness" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Nightlife">Nightlife</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Nightlife" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Professional Services">Professional Services</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Professional Services" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>



<!-- * * * * * * * * -->

<h2 id="Spas and Salons">Spas and Salons</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Spas and Salons" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>
<!-- * * * * * * * * -->

<h2 id="Hotel">Hotel</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Hotel" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>

<!-- * * * * * * * * -->

<h2 id="Other">Other</h2>

<ul class="post-gallery-linear">
{% for post in site.data.posts %}
  {% if post.vertical == "Other" %}
    <li>
      <img src="{{post.media}}" />
      <div>
      <p class="gallery_customer"><a target="_blank" href="https://passport.mainstreethub.com/location/{{post.location}}">Customer {{post.location}}</a></p>
      <p class="caption">{{post.caption}}</p>
      <p class="post_type">{{post.category}}</p>
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>
<p><a href="#">Back to top</a></p>
