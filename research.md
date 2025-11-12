---
layout: default
title: Research | Boris Benedikter, Ph.D.
---
<div class="container" markdown="1">

# Research

<section class="research-vision">
  <blockquote>
    "How do we build autonomous aerospace and robotic systems that are <strong>safe</strong>, <strong>certifiable</strong>, and worthy of our <strong>trust</strong>?"
  </blockquote>
</section>

My work unifies the <strong>rigor of optimal control and convex optimization</strong> with the <strong>adaptability of modern AI</strong> to design verifiable <strong>Guidance, Navigation, and Control (GNC)</strong> for spacecraft, UAVs, and robotic systems. Traditional control offers guarantees but relies on simplified models; purely data-driven approaches capture complexities but lack formal assurances. I bridge these worlds by using data-driven models to inform mathematically sound optimizers, <strong>combining learning with guarantees</strong> for operation in uncertain, dynamic, and resource-constrained environments.

<div class="jump-nav">
  <div class="jump-group">
    <h4 class="jump-group-title">Past & Ongoing Research</h4>
    <div class="jump-group-buttons">
      <a href="#convex-optimization" class="jump-btn">Convex Optimization</a>
      <a href="#model-predictive-control" class="jump-btn">MPC for Real-Time Guidance</a>
      <a href="#stochastic-control" class="jump-btn">Stochastic Optimal Control</a>
      <a href="#physics-informed-neural-networks" class="jump-btn">Physics-Informed Neural Networks</a>
      <a href="#rl-enhanced-mpc" class="jump-btn">RL-Enhanced MPC</a>
      <a href="#warm-starting" class="jump-btn">Learning Warm-Starts</a>
      <a href="#orbit-determination" class="jump-btn">Space Domain Awareness</a>
    </div>
  </div>
  <div class="jump-group">
    <h4 class="jump-group-title">Research Vision</h4>
    <div class="jump-group-buttons">
      <a href="#uniting-learning-and-rigor" class="jump-btn">Safe-by-Design Hybrid GNC</a>
      <a href="#adaptable-and-scalable-autonomy" class="jump-btn">Real-Time Learning & Adaptation</a>
      <a href="#ensuring-real-world-trustworthiness" class="jump-btn">Verification & Assurance</a>
    </div>
  </div>
</div>

## Past & Ongoing Research

I develop computationally efficient <strong>optimization</strong> methods, advanced <strong>stochastic control</strong> frameworks, and <strong>learning-in-the-loop</strong> techniques to enhance adaptability and real-time feasibility in aerospace settings, from <strong>spacecraft and rocket guidance</strong> to <strong>space domain awareness</strong> and <strong>orbit determination</strong>.

<div class="research-grid">
  <div class="research-card" id="convex-optimization">
    <div class="card-text">
      <h3>Convex Optimization for Nonlinear GNC</h3>
      <p>I reformulate hard, nonlinear optimal control problems into convex subproblems via <strong>Lossless Convexification</strong> and <strong>Sequential Convex Programming</strong>, delivering orders-of-magnitude speed-ups and improved reliability versus classical NLP, enabling <strong>onboard real-time planning</strong> for flight-critical tasks.</p>
      <p><strong>Keywords:</strong> Lossless Convexification, Sequential Convex Programming (SCP), real-time guidance.</p>
      <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G005376" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2021)</a>, <a href="https://doi.org/10.2514/1.A35194" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2022)</a></p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/convex.png' | relative_url }}" alt="Convex Optimization">
    </div>
  </div>

  <div class="research-card" id="model-predictive-control">
    <div class="card-image">
      <img src="{{ '/assets/img/research/mpc.png' | relative_url }}" alt="Model Predictive Control">
    </div>
    <div class="card-text">
      <h3>MPC for Real-Time Guidance</h3>
      <p>Embedding the convexified OCP inside <strong>MPC</strong> yields a receding-horizon strategy that adapts to measured state and disturbances. Monte Carlo studies under uncertainty demonstrate <strong>real-time feasibility</strong> for rocket guidance, planetary landing, and on-orbit servicing.</p>
      <p><strong>Keywords:</strong> MPC, real-time optimization, guidance & control.</p>
      <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/6.2020-4268" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2020)</a>, <a href="https://arxiv.org/abs/2212.06518" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2021)</a></p>
    </div>
  </div>

  <div class="research-card" id="stochastic-control">
    <div class="card-text">
      <h3>Stochastic Optimal Control</h3>
      <p>To manage uncertainty explicitly, I advance <strong>Covariance Control (CC)</strong>, which co-optimizes a nominal trajectory and feedback policy to steer the full state distribution subject to <strong>chance constraints</strong>. I introduced a <strong>lossless convex reformulation</strong> of CC, enabling low-complexity solutions with rigorous probabilistic safety guarantees for missions in <strong>turbulent atmospheres</strong> and <strong>noisy orbital regimes</strong>.</p>
      <p><strong>Keywords:</strong> Covariance Control, chance constraints, stochastic MPC, uncertainty.</p>
      <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G006806" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2022)</a>, <a href="https://doi.org/10.3390/app151910469" target="_blank" rel="noopener">Garzelli et&nbsp;al. (2025)</a></p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/covariance_control.png' | relative_url }}" alt="Covariance Control">
    </div>
  </div>

  <div class="research-card" id="physics-informed-neural-networks">
    <div class="card-image">
      <img src="{{ '/assets/img/research/pinn.png' | relative_url }}" alt="Physics-Informed Neural Networks">
    </div>
    <div class="card-text">
      <h3>Physics-Informed Neural Networks</h3>
      <p>I leverage <strong>Physics-Informed Neural Networks (PINNs)</strong> to embed governing dynamics and optimality conditions. <strong>Pontryagin Neural Networks (PoNNs)</strong> incorporate the Maximum Principle for path-constrained OCPs. I also embed kinematics to estimate <strong>attitude from light curves</strong> for SDA, improving physical consistency and data efficiency.</p>
      <p><strong>Keywords:</strong> PINNs, Pontryagin's Maximum Principle, indirect methods, SDA.</p>
      <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G008854" target="_blank" rel="noopener">D’Ambrosio et&nbsp;al. (2025)</a>, <a href="https://www.researchgate.net/publication/388421123_Physics-Informed_Machine_Learning_for_Attitude_Estimation_from_Light_Curves" target="_blank" rel="noopener">Benedikter et&nbsp;al. (2025)</a></p>
    </div>
  </div>

  <div class="research-card" id="rl-enhanced-mpc">
    <div class="card-text">
      <h3>RL-Enhanced MPC</h3>
      <p>To blend MPC's constraint-awareness with RL's adaptability, the RL agent learns small cost-shaping corrections in perturbed simulations. The resulting controller improves <strong>robustness</strong> to unmodeled effects over standalone MPC and improves <strong>generalization</strong> over standalone RL. I demonstrate this approach on autonomous planetary landing, where uncertainty and real-time constraints are critical.</p>
      <p><strong>Keywords:</strong> RL, MPC, robustness, real-time guidance.</p>
      <p><strong>Selected Publications:</strong> <a href="https://www.researchgate.net/publication/396009163_Reinforcement_Learning_Enhanced_Model_Predictive_Control_for_Autonomous_Planetary_Landing" target="_blank" rel="noopener">Federici et&nbsp;al. (2025)</a></p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/rl-mpc.png' | relative_url }}" alt="RL-Enhanced MPC">
    </div>
  </div>

  <div class="research-card" id="warm-starting">
    <div class="card-image">
      <img src="{{ '/assets/img/research/warm_start.png' | relative_url }}" alt="Warm-Starting Optimization with Learning">
    </div>
    <div class="card-text">
      <h3>Learning Warm-Starts for Optimization</h3>
      <p>Using <strong>imitation learning</strong> (and increasingly, Transformers), I learn structured priors from expert solutions to generate <strong>high-quality initial guesses</strong> for rigorous optimizers, drastically reducing solve time while retaining guarantees. This is key for enabling fast and reliable <strong>onboard flight computing</strong>.</p>
      <p><strong>Keywords:</strong> imitation learning, Transformers, real-time optimization.</p>
    </div>
  </div>

  <div class="research-card" id="orbit-determination">
    <div class="card-text">
      <h3>Space Domain Awareness & Orbit Determination</h3>
      <p>I developed <strong>TRACER</strong> (Tracking, Recognition, Analysis for Celestial Ephemeris Retrieval), a Space4 Center tool integrated with a telescope network for <strong>initial orbit determination</strong>, <strong>tracking</strong>, and <strong>cataloging</strong> of resident space objects, supporting resilient SDA pipelines.</p>
      <p><strong>Keywords:</strong> estimation, tracking, cataloging, SDA.</p>
      <!-- If public, add: <p><a href="LINK-TO-REPO" target="_blank" rel="noopener">Code / docs</a></p> -->
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/orbit_determination.png' | relative_url }}" alt="Orbit Determination">
    </div>
  </div>
</div>

## Research Vision

I aim to establish the scientific and algorithmic foundations for <strong>trustworthy autonomy</strong> in flight and space systems. My vision is organized in three, mutually reinforcing research directions:

<div class="research-grid">
  <div class="research-card" id="uniting-learning-and-rigor">
    <div class="card-image">
      <img src="{{ '/assets/img/research/safe_AI.png' | relative_url }}" alt="Safe-by-Design Hybrid GNC">
    </div>
    <div class="card-text">
      <h3>1. Safe-by-Design Hybrid GNC</h3>
      <p>Fuse learning with control so AI components <strong>improve performance without compromising verifiability</strong>. High-capacity models (e.g., Transformers) provide <strong>warm-starts</strong> to convex/MPC solvers; physics and constraints are embedded in <strong>PINNs/PoNNs</strong> for <strong>safe-by-construction</strong> behavior.</p>
    </div>
  </div>

  <div class="research-card" id="adaptable-and-scalable-autonomy">
    <div class="card-text">
      <h3>2. Real-Time Learning & Adaptation</h3>
      <p>To operate in the real world, autonomous systems must adapt to unpredictable and dynamic environments in real time. My goal is to move beyond static, pre-programmed behaviors by training controllers as general-purpose <strong>Foundation Models</strong>. By leveraging <strong>transfer</strong> and <strong>meta-learning</strong>,  these models can be pre-trained on broad knowledge and then rapidly specialized for new tasks and scenarios. Target use-cases include <strong>UAVs in gusty urban flows</strong> and <strong>deep-space probes</strong> adapting to poorly known fields.</p>
    </div>
    <div class="card-image">
      <img src="{{ '/assets/img/research/foundation_model.png' | relative_url }}" alt="Real-Time Learning">
    </div>
  </div>

  <div class="research-card" id="ensuring-real-world-trustworthiness">
    <div class="card-image">
      <img src="{{ '/assets/img/research/verifiable_AI.png' | relative_url }}" alt="Verification & Assurance">
    </div>
    <div class="card-text">
      <h3>3. Verification & Assurance</h3>
      <p>A key challenge is ensuring that AI components behave reliably when transitioning from simulation to the real world. My vision is to establish the theoretical foundations and practical tools needed to bridge this <strong>sim-to-real</strong> gap. This involves developing <strong>runtime monitoring systems</strong> and <strong>stochastic reachability</strong>–based <strong>assurance envelopes</strong> that formally quantify risk in real time, enabling proactive safety measures and verifiable guarantees for deployed systems. This work is targeted for certification pathways, mission assurance, and <strong>hardware-in-the-loop</strong> flight testing.</p>
    </div>
  </div>
</div>

<!-- ## Selected Publications
The complete list is on the [Publications](./publications) page.
<ul class="pub-list">
  {% bibliography --cited %}
</ul> -->

</div>