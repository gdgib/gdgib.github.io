---
layout: home
title: Greg Gibeling
permalink: /index.html
---
# About Me
{% capture about %}
<p>I'm a hardware & software architect.
When I say full stack I'm not kidding: everything from transistors to copyright law.
My job is curing cancer, coding is just a hobby.</p>

<p>Since 2013, I've worked as software architect and manager at first <a href="http://www.bina.com">Bina Technologies</a> later acquired by <a href="http://sequencing.roche.com/en.html">Roche Sequencing</a>.
Design, coding, testing, infrastructure, management, leadership, recruiting, copyright, etc.
There's no end to what I've done, and no start to my talents.</p>

<p>For my artistic coding, see below, where you'll find a mix of the creative, practical and eye-ball-wateringly-complex.
Despite their diversity, the rest of my hobbies have one thing in common: they don't involve computers.
If you want to know more, we'll just have to meet off the internet.</p>
{% endcapture %}
{% include about_image.html image_src="images/ProfileMedium.jpg" image_alt="Greg Gibeling profile picture" content=about %}

{% if site.projects.size > 0 %}
# Projects

<ul>
{% assign active = site.projects | where: "active","true" %}
{% assign past = site.projects | where: "active","false" %}
{% if active.size > 0 %}
	<li>Active projects<ul>
	{% for item in active %}
		<li><a href="{{ item.link | default: item.url }}">{{ item.title }}</a>: {{ item.description }}</li>
	{% endfor %}</ul></li>
{% endif %}
{% if past.size > 0 %}
	<li>Past projects<ul>
	{% for item in past %}
		<li><a href="{{ item.link | default: item.url }}">{{ item.title }}</a>: {{ item.description }}</li>
	{% endfor %}</ul></li>
{% endif %}
</ul>
{% endif %}

{% if site.jobs.size > 0 %}
# Professional

<ul>
{% assign items = site.jobs | sort: 'start' %}
{% for item in items %}
	<li><!--<a href="{{ item.link | default: item.url }}">-->{{ item.position }} at {{ item.employer }}<!--</a>-->, from {{ item.start | date: "%B %Y" }}{% if item.end %} to {{ item.end | date: "%B %Y" }}{% else %} onwward{% endif %}</li>
{% endfor %}
</ul>
{% endif %}


<script src="assets/js/epitaph.js"></script>
<script type="text/javascript">
function getElement() { return document.getElementsByClassName("footer-heading")[0]; }
window.addEventListener("load", loadEpitaph(getElement), false)
</script>
