export const sdlBuilderTemplate = {
  title: "Empty",
  code: "empty",
  category: "General",
  description: "An empty template with some basic config to get started.",
  content: "# Paste your SDL here!"
};
export const emptyTemplate = {
  title: "Empty",
  code: "empty",
  category: "General",
  description: "An empty template with some basic config to get started.",
  content: ""
};
export const helloWorldTemplate = {
  title: "Hello World",
  name: "Hello World",
  code: "hello-world",
  category: "General",
  description: "Simple next.js web application showing hello world.",
  githubUrl: "https://github.com/maxmaxlabs/hello-akash-world",
  valuesToChange: [],
  content: `# Welcome to the Akash Network! 🚀☁
# This file is called a Stack Definition Laguage (SDL)
# SDL is a human friendly data standard for declaring deployment attributes. 
# The SDL file is a "form" to request resources from the Network. 
# SDL is compatible with the YAML standard and similar to Docker Compose files.

---
# Indicates version of Akash configuration file. Currently only "2.0" is accepted.
version: "2.0"

# The top-level services entry contains a map of workloads to be ran on the Akash deployment. Each key is a service name; values are a map containing the following keys:
# https://docs.akash.network/intro-to-akash/stack-definition-language#services
services:
  # The name of the service "web"
  web:
    # The docker container image with version. You must specify a version, the "latest" tag doesn't work.
    image: akashlytics/hello-akash-world:0.2.0
    # You can map ports here https://docs.akash.network/intro-to-akash/stack-definition-language#services.expose
    expose:
      - port: 3000
        as: 80
        to:
          - global: true

# The profiles section contains named compute and placement profiles to be used in the deployment.
# https://docs.akash.network/intro-to-akash/stack-definition-language#profiles
profiles:
  # profiles.compute is map of named compute profiles. Each profile specifies compute resources to be leased for each service instance uses uses the profile.
  # https://docs.akash.network/intro-to-akash/stack-definition-language#profiles.compute
  compute:
    # The name of the service
    web:
      resources:
        cpu:
          units: 0.5
        memory:
          size: 512Mi
        storage:
          size: 512Mi

# profiles.placement is map of named datacenter profiles. Each profile specifies required datacenter attributes and pricing configuration for each compute profile that will be used within the datacenter. It also specifies optional list of signatures of which tenants expects audit of datacenter attributes.
# https://docs.akash.network/intro-to-akash/stack-definition-language#profiles.placement
  placement:
    dcloud:
      pricing:
        # The name of the service
        web:
          denom: uakt
          amount: 1000

# The deployment section defines how to deploy the services. It is a mapping of service name to deployment configuration.
# https://docs.akash.network/intro-to-akash/stack-definition-language#deployment
deployment:
  # The name of the service
  web:
    dcloud:
      profile: web
      count: 1
`
};
export const ubuntuTemplate = {
  title: "Ubuntu",
  name: "Ubuntu",
  code: "ubuntu",
  category: "General",
  description: "Get started with a simple linux Ubuntu server!",
  githubUrl: "",
  valuesToChange: [],
  content: `---
version: "2.0"

services:
  app:
    image: ubuntu:latest     
    
    command:
      - "bash"
      - "-c"
    args:
      - 'apt-get update ;
        apt-get upgrade -y ;
        apt-get install vim -y ;
        sleep infinity'
    
    expose:
      - port: 80
        as: 80
        to:
          - global: true
      - port: 22
        as: 22
        to:
          - global: true 
profiles:
  compute:
    app:
      resources:
        cpu:
          units: 0.5
        memory:
          size: 512Mi
        storage:
          size: 1Gi
          
  placement:
    akash: 
      attributes:
            
      pricing:
        app:
          denom: uakt
          amount: 10000
deployment:
  app:
    akash:
      profile: app
      count: 1 
`
};

export const hardcodedTemplates = [sdlBuilderTemplate, emptyTemplate, helloWorldTemplate, ubuntuTemplate];
