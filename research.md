---
layout: default
title: Research | Boris Benedikter, Ph.D.
description: Research in stochastic optimal control, covariance control, convex optimization, and learning for trustworthy aerospace and robotic autonomy.
---
<div class="container" markdown="1">

# Research

<section class="research-vision">
  <blockquote>
    How can autonomous systems make <strong>safe and efficient decisions</strong> under <strong>uncertainty</strong>, constraints, and limited computation?
  </blockquote>
</section>

My research advances <strong>trustworthy autonomy for aerospace and robotic systems</strong> through control, optimization, and learning. A central focus is developing mathematical and computational methods for <strong>planning and control under uncertainty</strong>, including stochastic optimal control, covariance control, convex optimization, and real-time guidance.

My group develops <strong>model-based, learning-enabled, and hybrid approaches</strong>. We choose methods according to the problem's structure, available models and data, computational resources, and safety and performance requirements. Research spans new control formulations and numerical algorithms, learning from data, and the integration of these capabilities into autonomous systems.

At Oklahoma State University–Tulsa, I am building a program that connects <strong>mathematical theory, algorithms, and simulation</strong> with verification and experimental validation. The themes below bring together published contributions and the research questions I intend to pursue as the group grows.

<div class="jump-nav">
  <div class="jump-group">
    <h4 class="jump-group-title">Research Themes</h4>
    <div class="jump-group-buttons">
      <a href="#optimization-based-control" class="jump-btn">Optimization-Based Control</a>
      <a href="#stochastic-control" class="jump-btn">Stochastic &amp; Covariance Control</a>
      <a href="#learning-enabled-autonomy" class="jump-btn">Learning &amp; Hybrid Autonomy</a>
      <a href="#ensuring-real-world-trustworthiness" class="jump-btn">Safety &amp; Experimental Validation</a>
      <a href="#orbit-determination" class="jump-btn">Space Domain Awareness</a>
    </div>
  </div>
</div>

## Optimization-Based Planning and Control
{: #optimization-based-control }

How can nonlinear, constrained control problems be solved efficiently and reliably enough to support autonomous decisions? My work develops <strong>convex formulations, successive convexification methods, and feedback guidance algorithms</strong> for aerospace systems.

<div class="research-grid">
  <div class="research-card" id="convex-optimization">
    <div class="card-text">
      <h3>Convex Optimization for Nonlinear GNC</h3>
      <p>I develop <strong>lossless convexification</strong> and <strong>sequential convex programming</strong> methods for guidance, navigation, and control (GNC). These methods exploit problem structure to solve constrained trajectory and maneuver optimization problems. Applications include launch vehicle ascent, powered descent, and spacecraft attitude reorientation with keep-out constraints.</p>
      <p><strong>Current directions:</strong> improving computational reliability, handling nonlinear dynamics and constraints, and reducing the cost of onboard optimization.</p>
      <p><strong>Selected publications:</strong> <a href="https://doi.org/10.2514/1.G005376" target="_blank" rel="noopener">Ascent trajectory optimization (2021)</a>; <a href="https://doi.org/10.2514/1.A35194" target="_blank" rel="noopener">Heat-flux and splash-down constraints (2022)</a>; <a href="https://doi.org/10.2514/1.G008212" target="_blank" rel="noopener">Attitude reorientation with keep-out constraints (2026)</a>.</p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/convex.png' | relative_url }}" alt="Convex representation of thrust constraints">
    </div>
  </div>

  <div class="research-card" id="model-predictive-control">
    <div class="card-image">
      <img src="{{ '/assets/img/research/mpc.png' | relative_url }}" alt="Model predictive control for real-time guidance">
    </div>
    <div class="card-text">
      <span id="adaptable-and-scalable-autonomy"></span>
      <h3>Model Predictive Control and Real-Time Guidance</h3>
      <p><strong>Model predictive control (MPC)</strong> repeatedly updates a plan using the measured state and a model of the system. My work combines MPC with convex optimization to generate guidance commands while accounting for mission constraints and disturbances, including autonomous launch vehicle upper-stage guidance.</p>
      <p><strong>Current directions:</strong> efficient replanning, feedback under model mismatch, and reliable computation within onboard time and resource limits.</p>
      <p><strong>Selected publications:</strong> <a href="https://doi.org/10.2514/6.2020-4268" target="_blank" rel="noopener">Convex optimization and MPC for upper-stage guidance (2020)</a>; <a href="https://arxiv.org/abs/2212.06518" target="_blank" rel="noopener">Guidance with a robust splash-down constraint (2021)</a>.</p>
    </div>
  </div>
</div>

## Stochastic Optimal Control and Covariance Control
{: #stochastic-control }

How can a controller shape both a system's motion and its uncertainty? <strong>Stochastic optimal control is a central research direction in my group</strong>, with contributions in covariance control, chance-constrained planning, and joint trajectory and feedback-policy design.

<div class="research-grid">
  <div class="research-card">
    <div class="card-text">
      <h3>Planning Trajectories and Shaping Uncertainty</h3>
      <p><strong>Covariance control</strong> jointly designs a nominal trajectory and a feedback policy to steer the state mean and covariance. Chance constraints express acceptable levels of risk, allowing uncertainty to enter the planning problem explicitly. My work includes a <strong>lossless convex reformulation</strong> of covariance control and its application to stochastic low-thrust trajectory optimization.</p>
      <p>Related work addresses UAV path planning with obstacle avoidance, spacecraft rendezvous and docking, and stationkeeping near Earth–Moon libration points. These methods use mathematical models of dynamics and uncertainty to design feedback policies and evaluate probabilistic constraint satisfaction under the formulation's assumptions.</p>
      <p><strong>Current directions:</strong> extending tractable formulations to more complex dynamics and environments, improving computational efficiency, and evaluating sensitivity to uncertainty-model mismatch.</p>
      <p><strong>Selected publications:</strong> <a href="https://doi.org/10.2514/1.G006806" target="_blank" rel="noopener">Covariance control for low-thrust trajectories (2022)</a>; <a href="https://doi.org/10.52202/078368-0025" target="_blank" rel="noopener">Rendezvous and docking (2024)</a>; <a href="https://doi.org/10.3390/app151910469" target="_blank" rel="noopener">Stochastic UAV path planning (2025)</a>.</p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/covariance_control.png' | relative_url }}" alt="State trajectories with initial and final uncertainty ellipses in covariance control">
    </div>
  </div>
</div>

## Learning-Enabled and Hybrid Autonomy
{: #learning-enabled-autonomy }

<span id="uniting-learning-and-rigor"></span>

Machine learning can provide useful models, policies, and computational shortcuts when data contain information that is difficult to capture analytically. I investigate <strong>learning-enabled methods and their integration with control and optimization</strong>, evaluating the contribution of learning to accuracy, adaptation, computational cost, and constraint satisfaction.

<div class="research-grid">
  <div class="research-card" id="physics-informed-neural-networks">
    <div class="card-image">
      <img src="{{ '/assets/img/research/pinn.png' | relative_url }}" alt="Physics-informed neural networks for optimal control">
    </div>
    <div class="card-text">
      <h3>Physics-Informed Neural Networks</h3>
      <p>I investigate neural networks that incorporate governing dynamics and optimality conditions. <strong>Pontryagin Neural Networks (PoNNs)</strong> use the Maximum Principle to solve path-constrained optimal control problems. Related work uses physical structure to estimate spacecraft attitude from light curves.</p>
      <p><strong>Selected publications:</strong> <a href="https://doi.org/10.2514/1.G008854" target="_blank" rel="noopener">Path-constrained optimal control (2025)</a>; <a href="https://www.researchgate.net/publication/388421123_Physics-Informed_Machine_Learning_for_Attitude_Estimation_from_Light_Curves" target="_blank" rel="noopener">Attitude estimation from light curves (2025)</a>.</p>
    </div>
  </div>

  <div class="research-card" id="rl-enhanced-mpc">
    <div class="card-text">
      <h3>Reinforcement-Learning-Enhanced MPC</h3>
      <p>In this hybrid approach, reinforcement learning adjusts the cost used by a model predictive controller. The optimizer retains an explicit model and constraints, while learning helps account for effects that are difficult to represent in the nominal formulation. Our planetary landing studies evaluate the resulting controller's performance under uncertainty and model mismatch.</p>
      <p><strong>Selected publication:</strong> <a href="https://doi.org/10.2514/1.G009534" target="_blank" rel="noopener">RL-enhanced MPC for autonomous planetary landing (2026)</a>.</p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/rl-mpc.png' | relative_url }}" alt="Reinforcement learning integrated with model predictive control">
    </div>
  </div>

  <div class="research-card" id="warm-starting">
    <div class="card-image">
      <img src="{{ '/assets/img/research/spacecraft-learning-for-trajectory-optimization.png' | relative_url }}" alt="Learned initial guesses for trajectory optimization">
    </div>
    <div class="card-text">
      <h3>Learning to Support Optimization</h3>
      <!-- <p>An ongoing direction is to use <strong>imitation learning</strong> to generate initial guesses, or warm starts, for trajectory optimization. The goal is to reduce solution time while leaving the final trajectory subject to the optimizer's model and constraints. Research questions include generalization to new scenarios, solver convergence, and the conditions under which learned initialization improves reliability.</p> -->
      <p> Learning can strengthen optimization without replacing its model-based structure. We use learning to characterize information that is difficult to model directly, including <strong>unknown disturbances, uncertainty, and missing or residual dynamics</strong>. Gaussian processes can provide probabilistic models that connect learned uncertainty with stochastic trajectory and feedback design, while sparse identification and other physics-guided learning methods can augment nominal dynamics with corrections learned from data. The resulting models can then be incorporated directly into <strong>trajectory optimization, predictive control, and uncertainty-aware decision making</strong>. </p>
      <p><strong>Related publication:</strong> <a href="https://doi.org/10.2514/1.G009338" target="_blank" rel="noopener">Gaussian-process-based covariance control for on-orbit servicing (2026)</a>.</p>
    </div>
  </div>
</div>

## Safety, Verification, and Experimental Validation
{: #ensuring-real-world-trustworthiness }

Safety and performance must be assessed across <strong>model-based, learning-enabled, and hybrid systems</strong>. As the group grows, I aim to connect mathematical analysis with systematic testing and experiments, making the assumptions and limits of each method explicit.

<div class="highlights">
  <div class="highlight-card static-card">
    <h3>Quantifying Risk and Reliability</h3>
    <p>Build on stochastic control and chance-constrained planning to assess uncertainty, constraint satisfaction, and sensitivity to model mismatch. Future directions include runtime monitoring and assurance methods for autonomous decisions.</p>
  </div>
  <div class="highlight-card static-card">
    <h3>Testing Beyond Nominal Conditions</h3>
    <p>Use Monte Carlo analysis, stress testing, and high-fidelity simulation to evaluate methods under disturbances and modeling errors. Planned hardware-in-the-loop studies will examine timing, sensing, and implementation effects.</p>
  </div>
  <div class="highlight-card static-card">
    <h3>Building Experimental Platforms</h3>
    <p>The laboratory is being established at OSU-Tulsa. Planned UAV and spacecraft maneuver platforms will support experiments in navigation, proximity operations, and coordination, connecting theoretical and computational work to physical systems.</p>
  </div>
</div>

## Estimation and Space Domain Awareness
{: #orbit-determination }

Reliable autonomy also depends on estimating the state of the system and its environment. My work in <strong>space domain awareness</strong> includes model-based orbit determination and learning-based interpretation of photometric observations.

<div class="research-grid">
  <div class="research-card">
    <div class="card-text">
      <h3>Orbit Determination and Space Object Tracking</h3>
      <p>I developed <strong>TRACER</strong> (Tracking, Recognition, Analysis for Celestial Ephemeris Retrieval), a Space4 Center tool integrated with a telescope network for initial orbit determination, tracking, and cataloging of resident space objects. This work complements research on spacecraft attitude estimation from light curves.</p>
      <p><strong>Selected publication:</strong> <a href="https://doi.org/10.3390/aerospace13060518" target="_blank" rel="noopener">TRACER (2026)</a>.</p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/orbit_determination.png' | relative_url }}" alt="Orbit determination for space domain awareness">
    </div>
  </div>
</div>

Explore the [full publication list](publications.html) for published work, or visit [Prospective PhD Students](prospective-phd-students.html) to learn about research opportunities and the group being established at OSU-Tulsa.

</div>
