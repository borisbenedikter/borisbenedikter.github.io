---
layout: default
title: Publications | Boris Benedikter, Ph.D.
description: Publications on stochastic optimal control, covariance control, convex optimization, learning-enabled autonomy, and space domain awareness.
---
<div class="container" markdown="1">

# Publications

For a complete and up-to-date list, please visit my [Google Scholar profile](https://scholar.google.com/citations?user=kHuGNkEAAAAJ){:target="_blank" rel="noopener noreferrer"}.

<div class="pub-stats">
    <span><strong>Total Citations:</strong> 800+</span>
    <span><strong>h-index:</strong> 15</span>
</div>

## Selected Research by Theme

These papers illustrate contributions in model-based control and optimization, learning-enabled methods, and hybrid approaches. Expand a theme to view selected papers, or open the complete lists of [journal articles](#journal-articles) and [conference proceedings](#conference-proceedings) below.

<details class="publication-section" id="stochastic-optimal-control-and-covariance-control">
  <summary><h3>Stochastic Optimal Control and Covariance Control</h3></summary>
  <div class="publication-content">
<ul class="selected-work-list">
  <li>
    <a href="https://doi.org/10.2514/1.G006806" target="_blank" rel="noopener noreferrer">Convex Approach to Covariance Control with Application to Stochastic Low-Thrust Trajectory Optimization</a> (2022)
    — convex reformulation for joint trajectory and feedback-policy design under uncertainty.
  </li>
  <li>
    <a href="https://doi.org/10.3390/app151910469" target="_blank" rel="noopener noreferrer">Stochastic Path Planning with Obstacle Avoidance for UAVs Using Covariance Control</a> (2025)
    — uncertainty shaping and chance-constrained obstacle avoidance.
  </li>
  <li>
    <a href="https://doi.org/10.1016/j.actaastro.2026.09.040" target="_blank" rel="noopener noreferrer">Successive Convexification for 6-DoF Moon Landing Using Modified Rodrigues Parameters with Probabilistic Upper and Lower Thrust Bounds</a> (2027)
    — convex reformulation for joint trajectory and feedback-policy design under uncertainty for 6-DoF Moon landing. 
  </li>
</ul>
  </div>
</details>

<details class="publication-section" id="convex-optimization-and-maneuver-planning">
  <summary><h3>Convex Optimization and Maneuver Planning</h3></summary>
  <div class="publication-content">
<ul class="selected-work-list">
  <li>
    <a href="https://doi.org/10.2514/1.G005376" target="_blank" rel="noopener noreferrer">Convex approach to three-dimensional launch vehicle ascent trajectory optimization</a> (2021)
    — convex reformulation of launch vehicle ascent trajectory optimization.
  </li>
  <li>
    <a href="https://doi.org/10.2514/1.A35194" target="_blank" rel="noopener noreferrer">Convex Optimization of Launch Vehicle Ascent Trajectory with Heat-Flux and Splash-Down Constraints</a> (2022)
    — convex optimization of launch vehicle ascent trajectory with additional non-convex constraints.
  </li>
  <li>
    <a href="https://doi.org/10.2514/1.G008212" target="_blank" rel="noopener noreferrer">Convex Approach to Optimal Spacecraft Attitude Reorientation with Keep-Out Constraints</a> (2026)
    — constrained spacecraft maneuver design using convex optimization.
  </li>
</ul>
  </div>
</details>

<details class="publication-section" id="learning-enabled-and-hybrid-methods">
  <summary><h3>Learning-Enabled and Hybrid Methods</h3></summary>
  <div class="publication-content">
<ul class="selected-work-list">
  <li>
    <a href="https://doi.org/10.2514/1.A35076" target="_blank" rel="noopener noreferrer">Deep learning techniques for autonomous spacecraft guidance during proximity operations</a> (2021)
    — MPC vs. imitation learning vs. reinforcement learning for autonomous spacecraft guidance.
  </li>
  <li>
    <a href="https://doi.org/10.2514/1.G009534" target="_blank" rel="noopener noreferrer">Reinforcement Learning Enhanced Model Predictive Control with Application to Autonomous Planetary Landing</a> (2026)
    — reinforcement learning integrated with model predictive control.
  </li>
  <li>
    <a href="https://doi.org/10.2514/1.G008854" target="_blank" rel="noopener noreferrer">Physics-Informed Pontryagin Neural Networks for Path-Constrained Optimal Control Problems</a> (2025)
    — neural networks incorporating dynamics and optimality conditions.
  </li>
</ul>
  </div>
</details>

Further work includes launch vehicle guidance, spacecraft rendezvous, and [estimation and space domain awareness](research.html#orbit-determination). See the [Research page](research.html) for connections between these contributions and current directions.

## Complete Publication Lists

<details class="publication-section" id="journal-articles">
  <summary><h3>Journal Articles</h3></summary>
  <div class="publication-content">
<ul class="pub-list">
    {% bibliography --query @article %}
</ul>
  </div>
</details>

<details class="publication-section" id="conference-proceedings">
  <summary><h3>Conference Proceedings</h3></summary>
  <div class="publication-content">
<ul class="pub-list">
    {% bibliography --query @inproceedings %}
</ul>
  </div>
</details>

</div>