---
layout: default
title: Research | Boris Benedikter, Ph.D.
---
<div class="container" markdown="1">

# Research

<section class="research-vision">
    <blockquote>"How can we make autonomy safe, reliable, and worthy of our trust?"</blockquote>
</section>

My research is driven by this fundamental question. Traditional control methods offer <strong>rigor</strong> but often rely on simplified models, while purely data-driven approaches capture <strong>real-world complexities</strong> but lack the formal assurances needed for safety-critical applications. My work aims to bridge these worlds by using rich, data-driven models to inform mathematically sound optimization and control frameworks, <strong>combining the adaptability of learning with the reliability of formal methods.</strong>

<div class="jump-nav">
    <a href="#convex-optimization" class="jump-btn">Convex Optimization</a>
    <a href="#model-predictive-control" class="jump-btn">Model Predictive Control</a>
    <a href="#stochastic-control" class="jump-btn">Stochastic Optimal Control</a>
    <a href="#physics-informed-neural-networks" class="jump-btn">Physics-Informed Neural Networks</a>
    <a href="#rl-enhanced-mpc" class="jump-btn">RL-Enhanced MPC</a>
</div>


## Past & Current Research
<div class="research-grid">
    <div class="research-card" id="convex-optimization">
        <div class="card-text">
            <h3>Convex Optimization</h3>
            <p>A core theme of my work is developing computationally efficient methods to solve highly nonlinear control problems. By reformulating them into convex subproblems, using techniques like <strong>Lossless Convexification</strong> and <strong>Sequential Convex Programming</strong>, I achieved orders-of-magnitude speedups and reduced sensitivity to initialization compared to traditional nonlinear programming methods, enabling fast and reliable real-time planning.</p>
            <p><strong>Keywords:</strong> Lossless Convexification, Sequential Convex Programming (SCP).</p>
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
            <h3>Model Predictive Control</h3>
            <p>I have integrated these fast optimization methods into Model Predictive Control (MPC) frameworks, where the convexified problem is solved repeatedly in a receding-horizon fashion based on the system's measured state. This creates a powerful <strong>real-time guidance strategy</strong> that adapts to live conditions. Through extensive Monte Carlo simulations under perturbed conditions, this approach has demonstrated reliable convergence and real-time feasibility for high-stakes applications, including autonomous <strong>rocket guidance</strong> and <strong>planetary landing</strong>.</p>
            <p><strong>Keywords:</strong> Real-Time Optimization, Guidance & Control.</p>
        </div>
    </div>
    <div class="research-card" id="stochastic-control">
        <div class="card-text">
            <h3>Stochastic Optimal Control</h3>
            <p>To explicitly manage and control uncertainty, my research advances the field of stochastic optimal control through <strong>Covariance Control (CC)</strong>. This framework moves beyond deterministic planning to simultaneously optimize a nominal trajectory and a robust feedback policy, effectively steering the system's probability distribution from start to finish. My key contribution is a <strong>lossless convex reformulation</strong> of the inherently nonconvex CC problem, enabling low-complexity solutions that provide rigorous probabilistic safety guarantees for systems operating in uncertain environments.</p>
            <p><strong>Keywords:</strong> Covariance Control, Chance Constraints, Stochastic Programming.</p>
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
            <h3>Physics-Informed Neural Networks (PINNs)</h3>
            <p>To address the "black box" problem in machine learning, my research leverages <strong>Physics-Informed NNs</strong>, which incorporate physical laws directly into the neural network's training process. I worked on <strong>Pontryagin Neural Networks (PoNNs)</strong>, a novel framework that embeds the <strong>Pontryagin Maximum Principle</strong> into a PINN, ensuring that the learned solutions are not only data-driven but also physically consistent and optimal.</p>
            <p><strong>Keywords:</strong> Physics-Informed Machine Learning, Pontryagin Maximum Principle, Optimal Control, Data-Driven Methods.</p>
        </div>
    </div>
    <div class="research-card" id="rl-enhanced-mpc">
        <div class="card-text">
            <h3>RL-Enhanced MPC</h3>
            <p>To combine the constraint-awareness and interpretability of <strong>MPC</strong> and the robustness and adaptability of <strong>Reinforcement Learning (RL)</strong>, I co-developed RL-Enhanced MPC (RLE-MPC). The RL agent learns small, corrective adjustments to the MPC's cost function in a perturbed simulation environment. The combined controller shows increased <strong>robustness</strong> to uncertainties than standalone MPC, while showing improved <strong>generalization</strong> to unseen scenarios compared to standalone RL, achieving overall superior performance.</p>
            <p><strong>Keywords:</strong> Reinforcement Learning, Model Predictive Control, Robust Control, Real-Time Guidance.</p>
        </div>
        <div class="card-image">
            <img src="{{ '/assets/img/research/rl-mpc.png' | relative_url }}" alt="RL-Enhanced MPC">
        </div>
    </div>
</div>

## Future Research Thrusts
<div class="research-grid">
    <div class="research-card">
        <div class="card-text">
            <h3>1. Safe-by-Design Hybrid AI</h3>
            <p>This thrust unifies the adaptability of AI with the rigor of control theory. I investigate how high-capacity models like Transformers can warm-start rigorous optimization methods and how AI can be designed to embed physical laws and safety constraints directly into its structure, making it inherently trustworthy.</p>
        </div>
        <div class="card-image">
            <img src="{{ '/assets/img/research/hybrid_ai.png' | relative_url }}" alt="Hybrid AI">
        </div>
    </div>
    <div class="research-card">
        <div class="card-text">
            <h3>2. Real-Time Learning and Adaptation</h3>
            <p>This research addresses how autonomous systems can adapt to unpredictable environments in real time. I explore training controllers as general-purpose <strong>Foundation Models</strong> that can be rapidly specialized for new tasks using transfer learning and meta-learning, enabling scalable and resilient autonomy.</p>
        </div>
        <div class="card-image">
            <img src="{{ '/assets/img/research/real_time_learning.png' | relative_url }}" alt="Real-Time Learning">
        </div>
    </div>
    <div class="research-card">
        <div class="card-image">
            <img src="{{ '/assets/img/research/robust_autonomy.png' | relative_url }}" alt="Robust Autonomy">
        </div>
        <div class="card-text">
            <h3>3. Verifiable and Robust Autonomy</h3>
            <p>This thrust focuses on bridging the "sim-to-real" gap. I develop theoretical tools and practical runtime monitoring systems to quantify the risk introduced by AI components, generate real-time safety assurance envelopes, and ensure that autonomous systems behave reliably when deployed in the real world.</p>
        </div>
    </div>
</div>

</div>