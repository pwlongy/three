<template>
  <div class="threeBox" ref="threeBox">
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as THREE from "three"

const threeBox = ref<HTMLInputElement | null>(null) 

onMounted(() => {
  console.log(THREE)
  // 创建场景
  const scene = new THREE.Scene()
  //创建相机
  const camera = new THREE.PerspectiveCamera(
    45, // 视角
    window.innerWidth / window.innerHeight, // 相机宽高比
    0.1,  // 近平面
    1000, // 远平面
  )
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  if(threeBox.value) {
    threeBox.value.appendChild(renderer.domElement)
  }

  // 创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建材质
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  // 创建网格
  const cube = new THREE.Mesh(geometry, material)
  // 添加到场景中
  scene.add(cube)

  // 设置相机位置
  camera.position.z = 5
  // 相机看向哪里
  camera.lookAt(0,0,0)


  // 渲染
  renderer.render(scene, camera)
})
</script>

<style lang="scss" scoped>
  .threeBox{
    width: 100%;
    height: 100%;
  }
</style>