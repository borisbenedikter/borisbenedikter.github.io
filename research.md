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
    <div class="jump-group">
        <h4 class="jump-group-title">Past & Ongoing Research</h4>
        <div class="jump-group-buttons">
            <a href="#convex-optimization" class="jump-btn">Convex Optimization</a>
            <a href="#model-predictive-control" class="jump-btn">Model Predictive Control</a>
            <a href="#stochastic-control" class="jump-btn">Stochastic Optimal Control</a>
            <a href="#physics-informed-neural-networks" class="jump-btn">Physics-Informed Neural Networks</a>
            <a href="#rl-enhanced-mpc" class="jump-btn">RL-Enhanced MPC</a>
            <a href="#warm-starting" class="jump-btn">Warm-Starting Optimization</a>
            <a href="#orbit-determination" class="jump-btn">Orbit Determination</a>
        </div>
    </div>
    <div class="jump-group">
        <h4 class="jump-group-title">Research Vision</h4>
        <div class="jump-group-buttons">
            <a href="#uniting-learning-and-rigor" class="jump-btn">Uniting Learning & Rigor</a>
            <a href="#adaptable-and-scalable-autonomy" class="jump-btn">Adaptable & Scalable Autonomy</a>
            <a href="#ensuring-real-world-trustworthiness" class="jump-btn">Ensuring Real-World Trustworthiness</a>
        </div>
    </div>
</div>


## Past & Ongoing Research

My research contributions focus on developing computationally efficient optimization techniques, advanced stochastic and robust control frameworks, and integrated physics-informed and learning-based methods to enhance reliability, adaptability, and real-time feasibility. These contributions span from rocket guidance and planetary landing to space situational awareness and orbit determination.

<div class="research-grid">
    <div class="research-card" id="convex-optimization">
        <div class="card-text">
            <h3>Convex Optimization</h3>
            <p>A core theme of my work is developing computationally efficient methods to solve highly nonlinear control problems. By reformulating them into convex subproblems, using techniques like <strong>Lossless Convexification</strong> and <strong>Sequential Convex Programming</strong>, I achieved orders-of-magnitude speedups and reduced sensitivity to initialization compared to traditional nonlinear programming methods, enabling fast and reliable real-time planning.</p>
            <p><strong>Keywords:</strong> Lossless Convexification, Sequential Convex Programming (SCP).</p>
            <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G005376" target="_blank" rel="noopener">Benedikter et al. (2021)</a>, <a href="https://doi.org/10.2514/1.A35194" target="_blank" rel="noopener">Benedikter et al. (2022)</a></p>
            <!-- <p><strong>Selected Publications:</strong> {% cite benedikter2021convex benedikter2022convexjournal %}</p> -->
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
            <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/6.2020-4268" target="_blank" rel="noopener">Benedikter et al. (2020)</a>, <a href="https://arxiv.org/abs/2212.06518" target="_blank" rel="noopener">Benedikter et al. (2021)</a></p>
            <!-- <p><strong>Selected Publications:</strong> {% cite benedikter2020autonomous benedikter2021autonomous %}</p> -->
        </div>
    </div>
    <div class="research-card" id="stochastic-control">
        <div class="card-text">
            <h3>Stochastic Optimal Control</h3>
            <p>To explicitly manage and control uncertainty, my research advances the field of stochastic optimal control through <strong>Covariance Control (CC)</strong>. This framework moves beyond deterministic planning to simultaneously optimize a nominal trajectory and a robust feedback policy, effectively steering the system's probability distribution from start to finish. My key contribution is a <strong>lossless convex reformulation</strong> of the inherently nonconvex CC problem, enabling low-complexity solutions that provide rigorous probabilistic safety guarantees for systems operating in uncertain environments.</p>
            <p><strong>Keywords:</strong> Covariance Control, Chance Constraints, Stochastic Programming.</p>
            <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G006806" target="_blank" rel="noopener">Benedikter et al. (2022)</a>, <a href="https://doi.org/10.3390/app151910469" target="_blank" rel="noopener">Garzelli et al. (2025)</a></p>
            <!-- <p><strong>Selected Publications:</strong> {% cite benedikter2022covariancejournal  garzelli2025stochastic %}</p> -->
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
            <p>To address the "black box" problem in machine learning, my research leverages <strong>Physics-Informed NNs</strong>, which incorporate physical laws directly into the neural network's training process. I worked on <strong>Pontryagin Neural Networks (PoNNs)</strong>, a novel framework that embeds the <strong>Pontryagin Maximum Principle</strong> into a PINN, ensuring that the learned solutions are not only data-driven but also physically consistent and optimal. I also used PINNs to for attitude estimation from <strong>light curves</strong> by embedding the governing <strong>kinematic equations</strong> into the loss function.</p>
            <p><strong>Keywords:</strong> Physics-Informed Machine Learning, Pontryagin Maximum Principle, Optimal Control, Data-Driven Methods.</p>
            <p><strong>Selected Publications:</strong> <a href="https://doi.org/10.2514/1.G008854" target="_blank" rel="noopener">D'Ambrosio et al. (2025)</a>, <a href="https://www.researchgate.net/publication/388421123_Physics-Informed_Machine_Learning_for_Attitude_Estimation_from_Light_Curves" target="_blank" rel="noopener">Benedikter et al. (2025)</a></p>
            <!-- <p><strong>Selected Publications:</strong> {% cite dambrosio2025physicsjournal benedikter2025physics %}</p> -->
        </div>
    </div>
    <div class="research-card" id="rl-enhanced-mpc">
        <div class="card-text">
            <h3>RL-Enhanced MPC</h3>
            <p>To combine the constraint-awareness and interpretability of <strong>MPC</strong> and the robustness and adaptability of <strong>Reinforcement Learning (RL)</strong>, I co-developed RL-Enhanced MPC (RLE-MPC). The RL agent learns small, corrective adjustments to the MPC's cost function in a perturbed simulation environment. The combined controller shows increased <strong>robustness</strong> to uncertainties than standalone MPC, while showing improved <strong>generalization</strong> to unseen scenarios compared to standalone RL, achieving overall superior performance.</p>
            <p><strong>Keywords:</strong> Reinforcement Learning, Model Predictive Control, Robust Control, Real-Time Guidance.</p>
            <p><strong>Selected Publications:</strong> <a href="https://www.researchgate.net/publication/396009163_Reinforcement_Learning_Enhanced_Model_Predictive_Control_for_Autonomous_Planetary_Landing" target="_blank" rel="noopener">Federici et al. (2025)</a></p>
            <!-- <p><strong>Selected Publications:</strong> {% cite federici2025reinforcement %}</p> -->
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
            <h3>Warm-Starting Optimization with Learning</h3>
            <p>I investigate the use of <strong>imitation learning</strong> to train complex control policies from datasets of expert demonstrations. Rather than deploying these learned policies directly as black-box controllers, their output is used to generate a <strong>high-quality initial guess</strong>, or "warm start," for a rigorous, optimization-based algorithm, dramatically reducing the convergence time of the formal solver.</p>
            <p><strong>Keywords:</strong> Imitation Learning, Warm Starting, Real-Time Optimization.</p>
            <!-- <p><strong>Selected Publications:</strong> {% cite federicideep2021 %}</p> -->
        </div>
    </div>
    <div class="research-card" id="orbit-determination">
        <div class="card-text">
            <h3>Orbit Determination</h3>
            <p>I developed <strong>TRACER</strong> (Tracking, Recognition, Analysis for Celestial Ephemeris Retrieval), a comprehensive software tool designed for space situational awareness. Integrated with the Space4 Center's telescope network, TRACER processes observational data to perform initial <strong>orbit determination</strong>, enabling the long-term <strong>tracking</strong> and <strong>cataloging</strong> of resident space objects.</p>
            <p><strong>Keywords:</strong> Orbit Determination, Space Object Tracking, Cataloging, Space Situational Awareness.</p>
        </div>
        <div class="card-image">
            <img src="{{ '/assets/img/research/orbit_determination.png' | relative_url }}" alt="Orbit Determination">
        </div>
    </div>
</div>

## Research Vision
My research is driven by a long-term vision to create the scientific and algorithmic foundations for <strong>trustworthy autonomous systems</strong>. This requires a unified framework that addresses three core challenges at the intersection of control theory, optimization, and machine learning.

<div class="research-grid">
    <div class="research-card" id="uniting-learning-and-rigor">
        <div class="card-image">
            <img src="{{ '/assets/img/research/safe_AI.png' | relative_url }}" alt="Uniting Learning and Rigor">
        </div>
        <div class="card-text">
            <h3>1. Uniting Learning and Rigor</h3>
            <p>The central scientific challenge is to fuse the adaptability of AI with the formal guarantees of control theory so that learning improves performance without compromising verifiability. My vision is to create <strong>inherently trustworthy hybrid systems</strong> by design. This involves using high-capacity models to generate high-quality warm-starts for rigorous optimizers and designing AI that embeds physical laws and safety constraints directly into its structure, ensuring that our systems are both powerful and provably safe.</p>
        </div>
    </div>
    <div class="research-card" id="adaptable-and-scalable-autonomy">
        <div class="card-text">
            <h3>2. Adaptable and Scalable Autonomy</h3>
            <p>To operate in the real world, autonomous systems must adapt to unpredictable and dynamic environments in real time. My goal is to move beyond static, pre-programmed behaviors by training controllers as general-purpose <strong>Foundation Models</strong>. By leveraging <strong>transfer learning</strong> and <strong>meta-learning</strong>, these models can be pre-trained on broad knowledge and then rapidly specialized for new tasks and scenarios, paving the way for truly scalable and resilient autonomy.</p>
        </div>
        <div class="card-image">
            <img src="{{ '/assets/img/research/foundation_model.png' | relative_url }}" alt="Real-Time Learning">
        </div>
    </div>
    <div class="research-card" id="ensuring-real-world-trustworthiness">
        <div class="card-image">
            <img src="{{ '/assets/img/research/verifiable_AI.png' | relative_url }}" alt="Robust Autonomy">
        </div>
        <div class="card-text">
            <h3>3. Ensuring Real-World Trustworthiness</h3>
            <p>A key challenge is ensuring that algorithms behave reliably when transitioning from simulation to the real world. My vision is to establish the theoretical foundations and practical tools needed to bridge this "sim-to-real" gap. This involves developing <strong>runtime monitoring systems</strong> and <strong>assurance envelopes</strong> that formally quantify risk in real time, providing the verifiable safety guarantees needed to deploy intelligent systems with confidence.</p>
        </div>
    </div>
</div>

<!-- ## Selected Publications
The complete list of my publications can be found on the [Publications](./publications) page.
<ul class="pub-list">
    {% bibliography --cited %}
</ul> -->

</div>